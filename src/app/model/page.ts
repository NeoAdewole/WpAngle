import { WpContent } from './wp-content';

export class Page {
    id: number;
    date: string;
    modified: string;
    link: string;
    slug: string;
    title: WpContent;
    excerpt: WpContent;
    content: WpContent;
    featured_image_src: string;
    authorName: string;
    author: WpContent;
}
