import Post from "./components/Post.js";

export default function Home() {
  const handleClick = () => {
    <Post />
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="shrink-0 bg-white p-12 rounded-lg w-full">
        <Post />
      </div>
    </main>
  );
}