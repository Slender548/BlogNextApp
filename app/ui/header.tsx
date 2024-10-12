import Link from "next/link";

export function Header() {
    return (
        <nav className="h-12 w-full flex relative">
            <Link href={"/"} className="h-full w-12 flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" /></svg></Link>
            <Link className="rounded sm:text-lg md:text-xl border-2 absolute right-2 top-1 px-2 py-1" href="/add_post">Добавить пост</Link>
        </nav>
    )
}