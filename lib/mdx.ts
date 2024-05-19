import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { MetaDataType } from "./types";

const rootDirectory = path.join(process.cwd(), "app", "content");

export const getBlogIdDetails = async (id: string) => {
  const slug = id.replace(/\.md(x)?$/, "");
  const filePath = path.join(rootDirectory, `${slug}.mdx`);
  try {
    const fileContent = fs.readFileSync(filePath, "utf8");

    const { content, frontmatter } = await compileMDX({
      source: fileContent,
      options: { parseFrontmatter: true },
    });

    return { meta: { ...frontmatter, slug }, content };
  } catch (error) {
    return {};
  }
};

export const getAllBlogDetails = async () => {
  const files = fs.readdirSync(rootDirectory);
  const list: MetaDataType[] = [];

  // if files are there then showing the blogs otherwise return empty list
  if (files.length) {
    for (const file of files) {
      const { meta } = (await getBlogIdDetails(file)) as unknown as {
        meta: MetaDataType;
      };

      if (meta) {
        list.push(meta);
      }
    }

    return list;
  }

  return [];
};
