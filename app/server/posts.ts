'use server';
import { writeFile, readFile } from "fs/promises";
// import { readFileSync } from "fs";

export type Post = {
  title: string;
  content: string;
};


export const getPost = async (id: number): Promise<Post> => {
  const posts = JSON.parse(await readFile("app/server/posts.json", "utf-8"));
  return posts[id];
};

export const getPosts = async (): Promise<Post[]> => {
  const posts = JSON.parse(await readFile("app/server/posts.json", "utf-8"));
  return Object.values(posts);
}

export const addPost = async (title: string, content: string) => {
  const posts = JSON.parse(await readFile("app/server/posts.json", "utf-8"));
  const newId = Object.keys(posts).length;
  await writeFile("app/server/posts.json", JSON.stringify({ ...posts, [newId]: { title, content } }));
};
