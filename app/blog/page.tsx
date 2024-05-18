import { getAllBlogDetails } from "@/lib/mdx";
import { MetaDataType } from "@/lib/types";
import BlogCard from "../components/BlogCard";

const Blogs = async () => {
  const blogMeta = (await getAllBlogDetails()) as unknown as MetaDataType[];

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-20 sm:pb-24">
      <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {blogMeta.map((details) => (
          <BlogCard details={details} key={details.title} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
