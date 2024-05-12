import Image from "next/image";
import Link from "next/link";
import { MetaDataType } from "@/lib/types";

const BlogCard = ({ details }: { details: MetaDataType }) => {
  return (
    <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 group">
      <Image
        src={details.image}
        alt=""
        fill
        className="-z-10 h-full w-full object-cover group-hover:scale-125 transition-all duration-500"
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />

      <h3 className="mb-3 text-lg font-semibold leading-6 text-white group-hover:text-brandPopup">
        <Link scroll href={`blog/${details.slug}`}>
          <span className="absolute inset-0" />
          {details.title}
        </Link>
      </h3>

      <time dateTime={details.date} className="text-sm leading-6 text-gray-300">
        {details.date}
      </time>
    </article>
  );
};

export default BlogCard;
