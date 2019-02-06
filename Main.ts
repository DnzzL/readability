import { ReadabilityExtractor } from "./Extractor";

function main(url: string) {
    var extractor = new ReadabilityExtractor()
    var article = extractor.extractInformation(url)
    console.log(article)
}

main("https://www.lemonde.fr/politique/article/2019/02/06/le-depute-matthieu-orphelin-annonce-qu-il-quitte-le-groupe-la-republique-en-marche_5420159_823448.html")