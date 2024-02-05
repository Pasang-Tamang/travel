import Blog from "@/components/Blog/Blog";

export default async function page() {
  const res = await fetch(
    "https://destination.missionsummittreks.com/api/blogs/list"
  );
  const blog = await res.json();

  // const meta = blog;
  // console.log(meta, "menu");
  return (
    <>
      <Blog blog={blog} />
    </>
  );
}
