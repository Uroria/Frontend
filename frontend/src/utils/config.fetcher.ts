"use server"

const STRAPI_HOST = process.env.STRAPI_HOST ?? 'http://localhost:1337'

export const fetchConfig = async () => {
    return {
        strapi: STRAPI_HOST
    }
}
