import Link from "next/link";

export default function Home() {
  return (
    <main className='bg-[#101418] flex-center p-10 text-5xl  h-screen'>

      <button className="font-bold bg-slate-600 hover:bg-slate-700 p-4 rounded-2xl duration-300">
        <Link href='/reports'>
          Go to Reports Page 📝
        </Link>
      </button>

    </main>
  );
}