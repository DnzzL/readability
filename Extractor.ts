import { isProbablyReaderable } from "./Readability-readerable";
import * as Readability from "./Readability";
import { JSDOM } from "jsdom";
import { Article } from "./Article";
const request = require('request');

interface Extractor {
    extractInformation: (string) => Article
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
    extractInformation(url: string): Article {
        request(url, function (error, response, body) {
            if (error != null || response.statusCode != 200) {
                console.log('status code:', response.statusCode)
                console.log('error:', error);
                return
            }
            var doc = new JSDOM(body, { url: url });
            if (! isProbablyReaderable(doc.window.document)) {
                return
            }
            var parsed = new Readability(doc.window.document, null).parse() as unknown as ReadabilityArticle;
            var article = new Article(parsed.title, parsed.byline, parsed.publishedTime, parsed.textContent, parsed.length, parsed.excerpt, parsed.siteName)
            return article
        });
    }
}