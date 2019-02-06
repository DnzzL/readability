import { isProbablyReaderable } from "./Readability-readerable";
import * as Readability from "./Readability";
import { JSDOM } from "jsdom";
import { Article } from "./Article";
const request = require('request');

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


function main(url: string) {
    request(url, function (error, response, body) {
        if (error != null || response.statusCode != 200) {
            console.log('status code:', response.statusCode)
            console.log('error:', error);
        }
        var doc = new JSDOM(body, { url: url });
        let parsed = new Readability(doc.window.document, null).parse() as unknown as ReadabilityArticle;
        let article = new Article(parsed.title, parsed.byline, parsed.publishedTime, parsed.content, parsed.length, parsed.excerpt, parsed.siteName)
        console.log(article)
    });
}