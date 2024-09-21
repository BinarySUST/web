import Link from 'next/link';

export default function Home() {
  return (
    <div className="">
      <h1>Hello binary sust</h1>
      <p>This is an experimental launch</p>
      <Link
        href="/blog"
        className="text-blue-500 hover:text-blue-800 hover:underline text-lg">
        Go to blog page
      </Link>
    </div>
  );
}
