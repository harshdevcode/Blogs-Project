import React from "react";
import Link from "next/link";

function TagCard({ tag }) {
  return (
    <Link href={`/tag/${tag.toLowerCase()}`}>
      <div
        className={`
                [ py-small px-regular rounded-md bg-primary-bg flex flex-row gap-4 items-center justify-center font-medium border border-primary-border cursor-pointer duration-150 ]
                [ hover:bg-secondary-bg ]
            `}
      >
        {tag}
      </div>
    </Link>
  );
}

export default TagCard;
