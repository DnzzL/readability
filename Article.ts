export class Article {
    title: string;
    author: string;
    content: string;
    length: number;
    description: string;
    siteName: string;

    constructor(title: string, author: string, content: string, length: number, description: string, siteName: string) {
        this.title = title
        this.author = author
        this.content = content
        this.length = length
        this.description = description
        this.siteName = siteName
    }

}