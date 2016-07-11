export function stringContainsAny(str, stringsToMatch) {
    for (const x of stringsToMatch) {
        if (String(str).indexOf(x) > -1) {
            return true;
        }
    }

    return false;
}