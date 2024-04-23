// generate object form the get key from the object
export const generateObjectFromArrayOfObject = (arrayOfObject, keyName) => {
    let generatedObj = {};
    arrayOfObject.forEach((item) => (generatedObj[item[keyName]] = ""));
    return generatedObj;
};
export const foo = Math.PI + Math.SQRT2;
