"use client";
import { useForm, Controller, FieldValues } from 'react-hook-form';
import { formPost } from "@/app/server/actions";
import FroalaEditor from "react-froala-wysiwyg";
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/plugins/align.min.js';
import 'froala-editor/js/plugins/char_counter.min.js';



export default function Page() {
  const { register, handleSubmit, control, formState: { errors } } = useForm();
  const onSubmit = (data: FieldValues) => formPost(data);
  return (
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center h-full w-full overflow-h-scroll">
        <label htmlFor="title">Название: </label>
        <input {...register("title", { required: true })} className="w-full text-center border rounded" minLength={10} maxLength={50} required></input>
        <label htmlFor="content">Содержание: </label>
        {/* <textarea name="content" className="w-full"></textarea> */}
        <Controller name="content" rules={{ required: true }} control={control} render={({field}) =><FroalaEditor model={field.value} onModelChange={field.onChange} tag="content" />}/>
        <button type="submit">Субмит</button>
      </form>
    // <div className="w-full flex justify-center invisible mb-8">f</div>{posts.map((post, idx) => {
    //   return (<article className="w-full flex flex-col items-center border mb-2" key={idx}>
    //     <header className="text-2xl text-center">{post.title}</header>
    //     <main className="text-md text-center">{post.content}</main>
    //   </article>)
    // })}
  );
}
