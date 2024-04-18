const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const BASE_FILE_UPDATED_AT = '2023-08-02';

const postsDirectory = path.join(process.cwd(), 'posts');

function getPostSlugs() {
    return fs.readdirSync(postsDirectory);
}

function getPostBySlug(filename, fields) {
    const slug = filename.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const items = {};

    fields.forEach((field) => {
        if (field === 'slug') {
            items[field] = slug;
        }

        if (field === 'content') {
            items[field] = content;
        }

        if (typeof data[field] !== 'undefined') {
            items[field] = data[field];
        }
    });
    return items;
}

function getAllPosts(fields) {
    const slugs = getPostSlugs();
    const posts = slugs
        .map((slug) => getPostBySlug(slug, fields))
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

    return posts;
}

function getFileUpdatedDateString(folder, file) {
    const stats = fs.statSync(path.join(process.cwd(), folder, file));
    const updatedat = new Date(stats.mtime.toString()).toISOString();
    return updatedat;
}

async function generateSitemap() {
    const posts = getAllPosts(['slug', 'updatedOn']);

    const EXTERNAL_DATA_URL = 'https://www.miniorange.com/blog';
    // Generating Sitemap
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    <!--We manually set the two URLs we know already-->
    <url>
    <loc>https://www.miniorange.com/blog/</loc>
	<lastmod>${BASE_FILE_UPDATED_AT}</lastmod>
    </url>
    ${posts
        .map(({ updatedOn, slug }) => {
            return `
                <url>
                    <loc>${`${EXTERNAL_DATA_URL}/${slug}/`}</loc>
					<lastmod>${updatedOn}</lastmod>
                </url>
            `;
        })
        .join('')}
   </urlset>
 `;

    fs.writeFile(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap, (err) => {
        console.log('Data written!');
        console.log('Error', err);
    });
}

generateSitemap();
