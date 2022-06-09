import React from "react";
import Link from "next/link";
import { announcement } from "../../types/components";
function Announcement({ label, link, type }: announcement) {
  return (
    <div>
      <div className="px-4 py-3 text-white bg-indigo-600">
        <p className="text-sm font-medium text-center">
          {label}{" "}
          {type === "link" && (
            <a className="underline" href={link}>
              {" "}
              Learn More →{" "}
            </a>
          )}
          {type === "page" && (
            <span className="underline">
              <Link href={`/${link}`}> Learn More → </Link>
            </span>
          )}
        </p>
      </div>
    </div>
  );
}

export default Announcement;
