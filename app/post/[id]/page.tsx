"use client";
import { getPost } from "@/app/server/posts";
import type { Post } from "@/app/server/posts";
import { useEffect, useState } from "react";
import { Parser } from "html-to-react";
import { EmailShareButton, ViberShareButton, VKShareButton, MailruShareButton, RedditShareButton, TwitterShareButton, TelegramShareButton, WhatsappShareButton, FacebookShareButton, LinkedinShareButton } from "next-share";

export default function Page({ params: { id } }: { params: { id: number } }) {
  console.log(id);
  const [post, setPost] = useState<Post | undefined>();
  useEffect(() => {
    async function getPosts() {
        setPost(await getPost(id));
    }
    getPosts();
  },[id]);
  const parser = new Parser();
  return post === undefined ? (
    <div className="w-full flex justify-center invisible mb-8">f</div>
  ) : (
    <article className="w-full flex flex-col items-center border mb-8 rounded-lg">
      <header className="text-2xl text-center">{post.title}</header>
      <main className="relative w-11/12">
        {parser.parse(post.content)}
      </main>
      <footer className="relative right-0">
        <VKShareButton url={`http://localhost:3000/post/${id}`}>VK</VKShareButton>
        <EmailShareButton url={`http://localhost:3000/post/${id}`} >Email</EmailShareButton>
        <ViberShareButton url={`http://localhost:3000/post/${id}`} >Viber</ViberShareButton>
        <MailruShareButton url={`http://localhost:3000/post/${id}`} >MailRu</MailruShareButton>
        <RedditShareButton url={`http://localhost:3000/post/${id}`} >Reddit</RedditShareButton>
        <TwitterShareButton url={`http://localhost:3000/post/${id}`} >Twitter</TwitterShareButton>
        <TelegramShareButton url={`http://localhost:3000/post/${id}`} >Telegram</TelegramShareButton>
        <WhatsappShareButton url={`http://localhost:3000/post/${id}`} >Whatsapp</WhatsappShareButton>
        <FacebookShareButton url={`http://localhost:3000/post/${id}`} >Facebook</FacebookShareButton>
        <LinkedinShareButton url={`http://localhost:3000/post/${id}`} >Linkedin</LinkedinShareButton>
      </footer>
    </article>
  );
}
