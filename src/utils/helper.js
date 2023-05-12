export const isEmptyObject = (obj) => {
    if(obj === null || obj === undefined) {
        return true;
    }
    if(typeof(obj) === 'object' && Object.keys(obj).length > 0) return false;
    return true;
}

export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));