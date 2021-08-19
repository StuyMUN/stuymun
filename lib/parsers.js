import { promises as fs } from 'fs'; 
import marked from 'marked';
import yaml from 'js-yaml';
import { readLines } from './util';

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

function parseYml(text) {
    let parsed = yaml.load(text),
        what = typeof parsed;

    if (what === 'string' || what === 'number')
        return { content: parsed };
    if (what === null)
        return { content: null };

    return parsed;
}

function parseMd(text) {
    return { content: marked(text) };
}

function parseMdAndYml(text) {
    let readingYml = false,
        hasYml = false,
        firstLine = true;

    let lines = readLines(text),
        mdBuffer = '',
        ymlBuffer = '';

    for (let line of lines) {
        if (firstLine) {
            firstLine = false;
            readingYml = (line === '---\n');
            hasYml = true;

            if (readingYml)
                continue;
        }
        
        if (readingYml && line === '---\n') {
            readingYml = false;
            continue;
        }

        if (readingYml) 
            ymlBuffer += line;
        else    
            mdBuffer += line;
    }

    let parsed = {
        content: parseMd(mdBuffer).content
    };

    if (hasYml && ymlBuffer != '') 
        parsed.metadata = parseYml(ymlBuffer)

    return parsed;
}

export const ParserDatabase = [
    new Parser('.json', JSON.parse), 

    new Parser('.yml', parseYml),

    new Parser('.md', parseMdAndYml),
    
    new Parser('.html', html => {
        return { content: html };
    })
];