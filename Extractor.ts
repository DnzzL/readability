import { isProbablyReaderable } from "./Readability-readerable";
import * as Readability from "./Readability";
import { JSDOM } from "jsdom";
import { Article } from "./Article";
const request = require('request');

interface Extractor {
    extractInformation: (HTMLDocument) => Article
}

interface ReadabilityArticle {
    title: string;
    byline: string;
    publishedTime: Date;
    dir: string;
    content: string;
    textContent: string;
    length: number;
    excerpt: string;
    siteName: string;
}

export class ReadabilityExtractor implements Extractor {
    extractInformation(body: string): Article {
        var doc = new JSDOM(body);
        if (!isProbablyReaderable(doc.window.document)) {
            return
        }
        var parsed = new Readability(doc.window.document, null).parse() as unknown as ReadabilityArticle;
        var article = new Article(parsed.title, parsed.byline, parsed.publishedTime, parsed.textContent, parsed.length, parsed.excerpt, parsed.siteName)
        return article
    }
}