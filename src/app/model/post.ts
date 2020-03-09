import { WpContent } from './wp-content';
import { SanitizeHtmlPipe } from '../pipes/sanitize-html';

export class Post {
    constructor(private sanitizeHtml: SanitizeHtmlPipe) {}
    id: number;
    link: string;
    slug: string;
    title: WpContent;
    excerpt: WpContent;
    content: WpContent;
    featured_image_src: string;
    published_date: Date;
    date: Date;
    modified: Date;
    authorName: string;
    author: WpContent;
    get safeContent() {
        console.log(this.content.rendered);
        return this.sanitizeHtml.transform(this.content.rendered);
    }
}
