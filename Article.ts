export class Article {
    readonly title: string;
    readonly author: string;
    readonly publishedTime: Date;
    readonly content: string;
    readonly length: number;
    readonly description: string;
    readonly siteName: string;

    constructor(title: string, author: string, publishedTime: Date, content: string, length: number, description: string, siteName: string) {
        this.title = title
        this.author = author
        this.publishedTime = publishedTime
        this.content = content
        this.length = length
        this.description = description
        this.siteName = siteName
    }

}