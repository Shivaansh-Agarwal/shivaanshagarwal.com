import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';
import { Post } from '../blogs/types';

const postsDirectory = path.join(process.cwd(), 'src/posts');

export function getSortedPostsList(isCategorizedByYear?: boolean): Record<string, Post[]> | Post[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const slug = fileName.replace(/\.md$/, '');
    // Read markdown file as string
    const fullFilePath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullFilePath, 'utf8');
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    // Combine the data with the slug
    const postData: Post = {
      slug,
      title: matterResult.data.title,
      date: matterResult.data.date,
      author: matterResult.data.author,
      hero_image: matterResult.data.hero_image,
    };
    return postData;
  });
  // Sort posts by date
  const sortedPosts = allPostsData.sort((a: any, b: any) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
  if (isCategorizedByYear) {
    const intialState: Record<string, Post[]> = {};
    const postsCategorizedByYear = sortedPosts.reduce((accum, curr) => {
      const year = curr.date.split('-')[0];
      if (accum[year]) {
        return {
          ...accum,
          [year]: [...accum[year], curr],
        };
      } else {
        return {
          ...accum,
          [year]: [curr],
        };
      }
    }, intialState);
    console.log(postsCategorizedByYear);
    return postsCategorizedByYear;
  }
  return sortedPosts;
}

export async function getPost(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    slug,
    contentHtml,
    title: matterResult.data.title,
    date: matterResult.data.date,
    author: matterResult.data.author,
    hero_image: matterResult.data.hero_image,
    ...matterResult.data,
  };
}
