import React from "react";
import { notFound } from "next/navigation";
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
  const details = (await getBlogIdDetails(params.id)) as unknown as {
    meta: MetaDataType;
  };

  if (Object.keys(details).length) {
    return {
      title: `Blog - ${details.meta.title}`,
    };
  }
  return {};
}

const page = async ({ params }: { params: { id: string } }) => {
  const { content } = await getBlogIdDetails(params.id);

  if (content) {
    return (
      <article className="px-6 lg:px-8 pb-20 sm:pb-24 prose md:prose-lg max-w-2xl mx-auto mt-10 prose-h1:font-normal prose-img:rounded-lg">
        {content}
      </article>
    );
  } else {
    notFound();
  }
};

export default page;
