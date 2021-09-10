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
