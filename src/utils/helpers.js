// generate object form the get key from the object
export const generateObjectFromArrayOfObject = (arrayOfObject, keyName) => {
  let generatedObj = {};
  arrayOfObject.forEach((item) => (generatedObj[item[keyName]] = ""));
  return generatedObj;
};
export const foo = Math.PI + Math.SQRT2;

export const getMonthYearFromDate = (sampleDate) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date(sampleDate);
  const year = d.getFullYear();
  const month = monthNames[d.getMonth()];

  return `${month} ${year}`;
};
