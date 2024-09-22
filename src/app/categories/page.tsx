import type { Metadata } from "next";
import { Categories } from "@/components/categories";

export const metadata: Metadata = {
  title: "Sky Enterprise | Blog Categories",
  description: "Blog Categories of Sky Enterprise Website.",
};

export default function Page() {
  return (
    <section className="container  my-10  ">
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter text-center">Categories</h1>
      <Categories />
    </section>
  );
}
