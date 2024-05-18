import { getAllBlogDetails } from "@/lib/mdx";
import { MetaDataType } from "@/lib/types";
import BlogCard from "./BlogCard";

export default async function BlogSection() {
  const blogMeta = (await getAllBlogDetails()) as unknown as
    | []
    | MetaDataType[];

  return (
    <div className="bg-brandAccent py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-2 text-4xl tracking-tight sm:text-5xl">Blog</h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogMeta.length
            ? blogMeta.map((details) => (
                <BlogCard details={details} key={details.title} />
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
