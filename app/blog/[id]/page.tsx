import React from "react";
import { getAllBlogDetails, getBlogIdDetails } from "@/lib/mdx";
import { MetaDataType } from "@/lib/types";
import type { Metadata } from "next";

// generating all the pages statically
export async function generateStaticParams() {
  const blogMeta = (await getAllBlogDetails()) as unknown as MetaDataType[];

  return blogMeta.map((post) => ({
    slug: post.slug,
  }));
}

type Props = {
  params: { id: string };
};

// generating meta-data dynamically
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const { meta } = (await getBlogIdDetails(params.id)) as unknown as {
    meta: MetaDataType;
  };

  return {
    title: `Blog - ${meta.title}`,
  };
}

const page = async ({ params }: { params: { id: string } }) => {
  const { content } = await getBlogIdDetails(params.id);

  return (
    <article className="px-6 lg:px-8 prose md:prose-lg max-w-2xl mx-auto mt-10 prose-h1:font-secondary prose-img:rounded-lg">
      {content}
    </article>
  );
};

export default page;
