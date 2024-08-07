import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { createPostInput, updatePostInput } from "@shivanandh33/medium-clone";
import { Hono } from "hono";
import { verify } from "hono/jwt";


export const blogRouter = new Hono<{
    Bindings:{
        DATABASE_URL : string,
        JWT_SECRET : string,
    },
    Variables :{
        userId : string,
    }
}>();

blogRouter.use('/*', async (c, next) => {
	const jwt = c.req.header('Authorization');
    if (!jwt) {
        c.status(401);
        return c.json({ error: "unauthorized" });
    }
    const token = jwt.split(' ')[1];
    const payload = await verify(token, c.env.JWT_SECRET);
    if (!payload) {
        c.status(401);
        return c.json({ error: "unauthorized" });
    }
    console.log(payload.id);
    //@ts-ignore
    c.set('userId', payload.id);
    await next();
})

blogRouter.post('/',async (c) => {
    const body = await c.req.json();
    const {success} = createPostInput.safeParse(body);    
    if(!success){
        c.status(403);
        return c.json({ error: "error while signing up" });
    }
    const userId = c.get('userId')
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blog = await prisma.post.create({
        data : {
            title : body.title,
            content : body.content,
            authorId : userId,
            
        }
    })
    return c.json({
        id:blog.id,
    });
})

blogRouter.put('/',async (c) => {
    const body = await c.req.json();
    const {success} = updatePostInput.safeParse(body);    
    if(!success){
        c.status(403);
        return c.json({ error: "error while signing up" });
    }
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const blog = await prisma.post.update({
        where :{
            id : body.id,
        },
        data :{
            title : body.title,
            content : body.content,
        }
    })
    return c.json({
        id:blog.id,
    });

})

blogRouter.get('/bulk',async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const blogs =await prisma.post.findMany();
    return c.json({
        blogs,
    }) 
})

blogRouter.get('/:id',async (c) => {
    const body = await c.req.json();
    const id = c.req.param("id");
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    try{
        const blog = await prisma.post.findFirst({
            where :{
                id : id,
            },
        })
        return c.json({
            blog,
        });
    } catch(e)
    {
        c.status(411);
        return c.json({ error: "error while fetching" });
    }
    
})
  
