import { ReadabilityExtractor } from "./Extractor";
import { DefaultReader } from "./Reader";

async function main(url: string) {
    var reader = new DefaultReader()
    var extractor = new ReadabilityExtractor()
    var body = await reader.read(url)
    var article = extractor.extractInformation(body)
    console.log(article)
}

main("https://www.lemonde.fr/politique/article/2019/02/06/le-depute-matthieu-orphelin-annonce-qu-il-quitte-le-groupe-la-republique-en-marche_5420159_823448.html")