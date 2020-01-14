import { WpContent } from './wp-content';

export class Project {
    id: number;
    link: string;
    type: string;
    slug: string;
    title: WpContent;
    excerpt: WpContent;
    content: WpContent;
    featured_image_src: string;
    authorName: string;
    author: WpContent;
}
