import { WpContent } from "./wp-content";

export class Post {
  id: number;
  link: string;
  slug: string;
  title: WpContent;
  excerpt: WpContent;
  content: WpContent;
  featuredImageSrc: string;
  authorName: string;
  author: WpContent;
}
