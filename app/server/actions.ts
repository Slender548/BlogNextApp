'use server';
import { addPost } from "@/app/server/posts";
import { redirect } from "next/navigation";
import { FieldValues } from "react-hook-form";

export async function formPost(formData: FieldValues) {
    const title = formData.title as string;
    const content = formData.content as string;
    await addPost(title, content);
    redirect('/');
}
