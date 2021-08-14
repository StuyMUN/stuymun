const fs = require('fs').promises;
const path = require('path');


async function getSiteData(root, data={}) {

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
            
            data[dirname] = await getSiteData(dirpath);
        }
    }
    
    return data;
}

getSiteData('data/').then(
    data => {
        console.log(JSON.stringify(data, null, " "));
    },
    err => {
        console.error(err);
    }
)