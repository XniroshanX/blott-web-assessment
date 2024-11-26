import { getDateByTimestamp } from "@/services/date";
import Image from "next/image";
import Link from "next/link";

export type NewsThumbnailProp = {
  url: string;
  thumbnail: string;
  source: string;
  date: string;
  title: string;
};

const NewsThumbnail = ({
  url,
  thumbnail,
  source,
  date,
  title,
}: NewsThumbnailProp) => {
  const formattedDate = getDateByTimestamp(date);
  return (
    <>
      <div className="block mb-5 md:hidden p-1 news-hover">
        <Link href={url}>
          <div className="h-12 float-left">
            <Image
              src={thumbnail}
              alt={title}
              width={100}
              height={200}
              className="me-3"
            />
          </div>
          <div className="flex">
            <div className="w-1/2 text-zinc-400 text-sm mb-2">{source}</div>
            <div className="w-1/2 text-zinc-400 text-sm text-right">
              {formattedDate}
            </div>
          </div>
          <div className="text-2xl">{title}</div>
        </Link>
      </div>
      {/* For larger screens */}
      <div className="hidden md:block overflow-hidden duration-300 p-5 news-hover">
        <Link href={url}>
          <div className="relative h-48 sm:h-64 md:h-72 lg:h-80">
            <Image
              src={thumbnail}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
          <div className="p-1">
            <div className="flex justify-center items-center w-full mt-2">
              <div className="w-1/2 text-zinc-400 text-xl">{source}</div>
              <div className="w-1/2 text-right text-zinc-400 text-xl">
                {formattedDate}
              </div>
            </div>
            <h2 className="text-3xl text-white mt-3">{title}</h2>
          </div>
        </Link>
      </div>
    </>
  );
};

export default NewsThumbnail;
