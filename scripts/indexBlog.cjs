const fs = require('fs');

const blogBaseDir = `${__dirname}/../public/blog/`;
const blogIndexerFilePath = `${__dirname}/../src/assets/json/blog.json`;
const files = fs.readdirSync(blogBaseDir);

let blogIndexerFile = [];

for (let filePath of files) {
    const page = {};
    const file = fs.readFileSync(blogBaseDir+filePath);
    const lines = file.toString().split(`\n`);

    const categories = lines.find((e) => e.includes('[//]: # "categories:'))?.replace('[//]: # "categories:', '')?.trim()?.replace('"', '')?.split(',');
    const title = lines.find((e) => e.startsWith('[//]: # "title:'))?.replace('[//]: # "title:', '')?.trim()?.replace('"', '');
    const description = lines.find((e) => e.startsWith('[//]: # "description:'))?.replace('[//]: # "description:', '')?.trim()?.replace('"', '');
    const published_at = lines.find((e) => e.startsWith('[//]: # "published_at:'))?.replace('[//]: # "published_at:', '')?.trim()?.replace('"', '');

    page.file = filePath;
    page.title = title;
    page.slug = filePath.replace('.md', '');
    page.categories = categories;
    page.description = description;
    page.published_at = published_at;

    blogIndexerFile.push(page);
}

blogIndexerFile.sort((a, b) => new Date(a.published_at) - new Date(b.published_at));

fs.writeFileSync(blogIndexerFilePath, JSON.stringify(blogIndexerFile));