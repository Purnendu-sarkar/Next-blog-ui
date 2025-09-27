/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogCard from "@/components/modules/Blogs/BlogCard";
import Hero from "@/components/modules/Home/Hero";

export default async function HomePage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`);
  const result = await res.json();
  const blogs = Array.isArray(result.data?.data) ? result.data.data : [];
  console.log(blogs);

  return (
    <div>
      <Hero />
      <h2 className="text-center my-5 text-4xl">Featured Posts</h2>
      <div className="grid grid-cols-3 gap-4">
        {blogs.map((blog: any) => (
          <BlogCard key={blog?.id} post={blog} />
        ))}
      </div>
    </div>
  );
}
