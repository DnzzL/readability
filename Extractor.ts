import { isProbablyReaderable } from "./Readability-readerable";
import * as Readability from "./Readability";
import {JSDOM} from "jsdom";
import { Article } from "./Article";


function main(url: string) {
    var doc = new JSDOM("<body>Here's a bunch of text</body>", {
        url: "https://www.example.com/the-page-i-got-the-source-from",
    });
    let reader = new Readability(doc.window.document, null);
    let article = reader.parse();
}