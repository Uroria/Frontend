export interface Image {
    name: string
    hash: string
    ext: string
    url: string
}

export interface Post {
    title: string
    description: string
    slug: string
    content: string
    featured: boolean

    smallImage?: Image
    mediumImage?: Image
    largeImage?: Image

    publishedAt: Date
    updatedAt: Date
    createdAt: Date
}

export interface PostsContextType {
    posts?: Post[]
}

export interface PostContextType {
    post: Post | null | undefined
}