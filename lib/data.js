import { promises as fs } from 'fs';
import path from 'path';

import { ParserDatabase } from './parsers';

function basename(filepath) {
    let almost = path.basename(filepath);
    
    // Check if still contains file extension, 
    // if so remove it
    let lastPeriod = almost.lastIndexOf(".");
    if (lastPeriod != -1) {
        almost = almost.substring(0, lastPeriod);
    }

    return almost;
}

export async function loadSiteData(root, data={}) {

    // Get the contents of the current path (as
    // file objects)
    const contents = await fs.readdir(
        root, { withFileTypes: true }
    );

    // Parse contents or continue traversing
    for (const content of contents) {
        if (content.isFile()) {
            const filepath = path.join(root, content.name);
            
            for (let parser of ParserDatabase) {
                if (parser.canParse(filepath)) {
                    data[basename(filepath)] = await parser.parseFile(filepath);
                }
            }
        } 
        else if (content.isDirectory()) {
            let dirpath = path.join(root, content.name),
                dirname = content.name;
            
            data[dirname] = await loadSiteData(dirpath);
        }
    }
    
    return data;
}