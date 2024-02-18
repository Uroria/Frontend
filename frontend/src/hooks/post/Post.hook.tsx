"use client"

import React, {FunctionComponent, ReactNode, useEffect, useState} from "react";
import {Post, PostContextType, PostsContextType} from "./Post.types";
import useConfig from "../../utils/config.hook";
import { notFound } from "next/navigation";

const PostsContext = React.createContext<PostsContextType | null>(null)

export const usePosts = () => React.useContext(PostsContext) as PostsContextType
export const usePost = (slug: string): PostContextType => {
    const {posts} = usePosts()
    if (!posts || posts.length <= 0) return {post: undefined}

    return {post: posts.find(post => post.slug == slug) || null}
}

export const useFeaturedPost = (): PostContextType => {
    const {posts} = usePosts()
    if (!posts || posts.length <= 0) return {post: undefined}

    return {
        post: posts.find(post => post.featured) || posts.reduce((postA, postB) => {
            return postA.publishedAt < postB.publishedAt ? postB : postA;
        })
    }
}

export const useNewestPost = (): PostContextType => {
    const {posts} = usePosts()
    if (!posts || posts.length <= 0) return {post: undefined}

    return {
        post: posts.reduce((postA, postB) => {
            return postA.publishedAt < postB.publishedAt ? postB : postA;
        })
    }
}

const PostsProvider: FunctionComponent<{ children: ReactNode }> = ({children}) => {
    const [config, error] = useConfig()
    const [posts, setPosts] = useState<Post[] | undefined>(undefined)
    useEffect(() => console.log(posts), [posts])

    if(!config) return <></>
    if(error) notFound()

    if (posts === undefined) {
        fetchPosts(config).then(setPosts).catch(reason => {
            setPosts([])
            console.log(reason)
        })
    }

    return <PostsContext.Provider value={{posts}}>
        {children}
    </PostsContext.Provider>
}

export default PostsProvider

const fetchPosts = (config: any): Promise<Post[]> => new Promise((resolve, reject) => {
    fetch(`${config.strapi}/api/posts?populate[0]=thumbnail`, {
        method: "GET"
    }).then(res => res.json()).then(json => {

        if (!json.data) return reject()

        const posts: Post[] = json.data.map((post: any) => ({
            title: post.attributes.title,
            description: post.attributes.description,
            slug: post.attributes.slug,
            content: post.attributes.content,
            featured: post.attributes.featured,
            createdAt: new Date(post.attributes.createdAt),
            updatedAt: new Date(post.attributes.updatedAt),
            publishedAt: new Date(post.attributes.publishedAt),
            ...(post.attributes.thumbnail.data ? {
                smallImage: {
                    name: post.attributes.thumbnail.data.attributes.formats.small.name,
                    hash: post.attributes.thumbnail.data.attributes.formats.small.hash,
                    ext: post.attributes.thumbnail.data.attributes.formats.small.ext,
                    url: post.attributes.thumbnail.data.attributes.formats.small.url
                },
                mediumImage: {
                    name: post.attributes.thumbnail.data.attributes.formats.medium.name,
                    hash: post.attributes.thumbnail.data.attributes.formats.medium.hash,
                    ext: post.attributes.thumbnail.data.attributes.formats.medium.ext,
                    url: post.attributes.thumbnail.data.attributes.formats.medium.url
                },
                largeImage: {
                    name: post.attributes.thumbnail.data.attributes.formats.large.name,
                    hash: post.attributes.thumbnail.data.attributes.formats.large.hash,
                    ext: post.attributes.thumbnail.data.attributes.formats.large.ext,
                    url: post.attributes.thumbnail.data.attributes.formats.large.url
                }
            } : null)
        })).sort((postA: Post, postB: Post) => {
            return postA.publishedAt.getDate() < postB.publishedAt.getDate()
        })

        resolve(posts)

    }).catch(error => {
        reject(error)
    })

})