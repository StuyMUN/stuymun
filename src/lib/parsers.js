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
        let fileContents = await fs.readFile(filePath, { encoding: 'utf8'});

        // Call the given parser
        return this.parser(fileContents, filePath);
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

function parseMdAndYml(text, filepath) {
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

    let parsed = parseMd(mdBuffer);

    if (hasYml && ymlBuffer != '') {
        let metadata = parseYml(ymlBuffer);
        if ('content' in metadata) {
            console.warn(
                `In "${filepath}", found "content: ${JSON.stringify(metadata['content'])}", but content keyword is reserved for markdown content. Ignoring "content" in metadata.`
            )
            delete metadata.content;
        }
        parsed = { ...parsed, ...metadata };
    }

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
