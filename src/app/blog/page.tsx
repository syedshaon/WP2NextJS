import { BlogPosts } from "@/components/posts";
import { getBlogPosts } from "./utils";
import Navbar from "@/components/nav";

export const metadata = {
  title: "Blog",
  description: "Posts of my blog.",
};

export default function Page() {
  let allBlogs = getBlogPosts();

  return (
    <>
      <Navbar />
      <hr className="my-5  border-gray-120  w-full  " />

      <div className="container">
        <BlogPosts allBlogs={allBlogs} />
      </div>
    </>
  );
}
