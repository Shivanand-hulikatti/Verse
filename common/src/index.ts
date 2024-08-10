import z from "zod";

export const signUpInput = z.object({
    email : z.string().email(),
    password : z.string().min(6),
    name : z.string(),
})


export const signInInput = z.object({
    email : z.string().email(),
    password : z.string().min(6),
})


export const createPostInput = z.object({
    title :z.string(),
    content : z.string(),
    publishedDate : z.string(),
})


export const updatePostInput = z.object({
    title :z.string(),
    content : z.string(),
    id:z.string(),
})


export type SignUpInput = z.infer<typeof signUpInput>
export type SignInInput = z.infer<typeof signInInput>
export type CreatePostInput = z.infer<typeof createPostInput>
export type UpdatePostInput = z.infer<typeof updatePostInput>

