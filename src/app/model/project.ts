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
    featured_images: string[];
    published_date: Date;
    date: Date;
    modified: Date;
    authorName: string;
    author: WpContent;
    // filter(arg0: (p: { slug: string }) => boolean) {
    //     throw new Error('Method not implemented.');
    // }
}
