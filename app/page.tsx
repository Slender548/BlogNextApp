import { getPosts } from "@/app/server/posts";
import Link from "next/link";
import { Parser } from "html-to-react";
// import {VKShareButton, EmailShareButton, ViberShareButton, MailruShareButton, RedditShareButton, TwitterShareButton, TelegramShareButton, WhatsappShareButton} from "next-share"

export default async function Home() {
  const posts = await getPosts();
  const htmlParser = new Parser();
  return (
    <>
      {posts.map((post, idx) => {
        return (<Link href={`/post/${idx}`} key={idx}><article className="w-full flex flex-col items-center border mb-8 rounded-lg">
          <header className="text-2xl text-center">{post.title}</header>
          <main className="relative w-11/12 overflow-hidden h-40">{htmlParser.parse(post.content)}</main>
        </article></Link>)
      })}
    </>
  );
}
