import Link from "next/link";

export default function Home() {
  return (
    <main className='bg-[#101418] flex-center p-10 h-screen'>

      <Link
        href='/reports'
        className="font-bold text-lg sm:text-5xl bg-slate-600 hover:bg-slate-700 p-4 rounded-2xl duration-300"
      >
        Go to Reports Page 📝
      </Link>

    </main>
  );
}