const fs = require("fs");
import { join } from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import remarkHeadingId from "remark-heading-id";
import { parse } from "node-html-parser";
import { categories } from "../utils/categories";

const postsDirectory = join(process.cwd(), "posts");

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(filename, fields) {
    const slug = filename.replace(/\.md$/, "");
    const fullPath = join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const items = {};

    fields.forEach((field) => {
        if (field === "slug") {
            items[field] = slug;
        }

        if (field === "content") {
            items[field] = content;
        }

        if (typeof data[field] !== "undefined") {
            items[field] = data[field];
        }
    });

    return items;
}

export function getPostByTitle() {}

export function getHeadlines(htmlContent) {
    const root = parse(htmlContent);
    const headlines = root.querySelectorAll("h3");
    return headlines.toString();
}

export function getPostsForCategory(fields, category) {
    const slugs = getPostSlugs();
    const posts = slugs
        .map((slug) => getPostBySlug(slug, fields))
        .filter((post) => {
            if (post.category.includes(category)) {
                return post;
            }
        })
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

    return posts;
}

export function getLatestPosts() {}

export function getAllPosts(fields) {
    const slugs = getPostSlugs();
    const posts = slugs
        .map((slug) => getPostBySlug(slug, fields))
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

    return posts;
}

export async function markdownToHTML(markdown) {
    const resultHtml = await remark()
        .use(remarkHeadingId)
        .use(html)
        .process(markdown);

    return resultHtml.toString();
}

export function getCategories() {
    return JSON.stringify(categories);
}
