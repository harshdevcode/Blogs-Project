import Link from "next/link";
import React from "react";

export default function FooterLink({ href, text }) {
    return (
        <Link href={href} target="_blank">
            <span className="text-caption text-slate-300 cursor-pointer hover:text-slate-200 duration-200">
                {text}
            </span>
        </Link>
    );
}
