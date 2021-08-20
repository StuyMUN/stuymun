export function isHttpLink(link) {
    return link !== undefined && 
            link.startsWith("http");
}

export function* readLines(fileContent) {
    let line = '';
    for (let i = 0; i < fileContent.length; ++i) {
        let char = fileContent.charAt(i);
        line += char;

        if (char == '\n') {
            yield line;
            line = '';
        }
    }
}


// export function* toIterator(object) {
//     for (let key in object) {
//         yield [ key, object[key] ];    
//     }
// }

// export function map(iterator, callback) {
//     let mappedItems = [], i = 0;
//     for (let item of iterator) {
//         mappedItems.push(callback(item, ++i));
//     }
//     return mappedItems;
// }

// function printer(lambda) {
//     return e => {
//         const result = lambda(e);
//         console.log(result);
//         return result;
//     };
// }