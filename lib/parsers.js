import { promises as fs } from 'fs'; 
import marked from 'marked';
import yaml from 'js-yaml';

class Parser {
    
    constructor(fileExtension, parser) {
        this.fileExtension = fileExtension;
        this.parser = parser;
    }

    canParse(filePath) {
        return filePath.endsWith(this.fileExtension);
    }

    // Convert a data file into an javascript object 
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

    new Parser('.yml', text => {
        let parsed = yaml.load(text),
            what = typeof parsed;

        if (what === 'string' || what === 'number')
            return { content: parsed };
        if (what === null)
            return { content: null };

        return parsed;
    }),
    
    new Parser('.md', markdown => {
        return { content: marked(markdown) };
    }),
    
    new Parser('.html', html => {
        return { content: html };
    })
];