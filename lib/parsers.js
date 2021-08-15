import { promises as fs } from 'fs'; 
import marked from 'marked';

export class Parser {
    
    constructor(fileExtension, parser) {
        this.fileExtension = fileExtension;
        this.parser = parser;
    }

    canParse(filePath) {
        return filePath.endsWith(this.fileExtension);
    }

    async parseFile(filePath) {
        // Create a string from file contents
        let fileContents = await fs.readFile(filePath);
        fileContents = String.fromCharCode(...fileContents);

        // Call the given parser
        return this.parser(fileContents);
    }

}

export const ParserDatabase = [
    new Parser('.json', JSON.parse), 
    new Parser('.md', marked),
    new Parser('.html', bytes => bytes)
];