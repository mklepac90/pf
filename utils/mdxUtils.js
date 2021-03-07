import fs from 'fs';
import path from 'path';

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), 'posts');
export const NEWSLETTER_PATH = path.join(process.cwd(), 'newsletter');
export const READING_PATH = path.join(process.cwd(), 'reading');

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));

export const newsletterFilePaths = fs
  .readdirSync(NEWSLETTER_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));

export const readingFilePaths = fs
  .readdirSync(READING_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));
