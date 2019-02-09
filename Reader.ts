const superagent = require('superagent');

interface Reader {
    read: (string) => Promise<string>
}

export class DefaultReader implements Reader {
    async read(url: string): Promise<string> {
        const response = await superagent.get(url)
        return response.text
    }
}