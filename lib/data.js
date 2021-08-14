import { promises as fs } from 'fs';
import path from 'path';

const DATA_PATH = path.join(process.cwd(), 'data/');

async function loadSiteData(root, data={}) {

    // Get the contents of the current path (as
    // file objects)
    const contents = await fs.readdir(
        root, { withFileTypes: true }
    );

    // Parse contents or continue traversing
    for (const content of contents) {
        if (content.isFile()) {
            let filename = path.basename(content.name, '.json'), 
                filepath = path.join(root, content.name);
            
            data[filename] = JSON.parse(await fs.readFile(filepath));
        } 
        else if (content.isDirectory()) {
            let dirpath = path.join(root, content.name),
                dirname = content.name;
            
            data[dirname] = await loadSiteData(dirpath);
        }
    }
    
    return data;
}

let LOADED_DATA = null;

export async function getSiteData() {
    if (LOADED_DATA === null)
        LOADED_DATA = await loadSiteData(DATA_PATH);
    return LOADED_DATA;
}