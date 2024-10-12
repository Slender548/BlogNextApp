import { getPosts } from "@/app/server/posts";

export async function GET() {

    const posts = await getPosts();

    return new Response(JSON.stringify(posts), {
        status: 200,
    });
}