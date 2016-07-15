/**
 * function to export data to a file
 * Note that "breaks" React encapsulation, but it's a throw-away element
 * that does not actually get added to the DOM
 * @constructor
 * @param {string} content - The content to be represented as a file.
 * @param {string} fileName - The name of the file to be exported (with extension)
 * @param {string} mimeType - The MIME type of the file
 * @param {string} charset - The charset for the file (defaults to utf-8)
 */
export function downloadToFile(content, fileName, mimeType = 'text/csv', charset = 'utf-8') {
    const a = document.createElement('a');
    a.textContent = 'download';
    a.download = fileName;
    a.href = getEncodedDataUri(mimeType, charset, content);
    a.click();
}

export function getEncodedDataUri(mimeType, charset, content) {
    return `data:${mimeType};charset=${charset},${encodeURIComponent(content)}`;
}