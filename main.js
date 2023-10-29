const expo = (num, power, callback) => {
    callback = num**power
    return callback
}

console.log(expo(5,3))

async function deepCopyAsync(obj) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const copy = deepCopy(obj);
        resolve(copy);
      }, 0);
    });
  }
  
  function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
  
    if (Array.isArray(obj)) {
      const copyArray = [];
      for (let i = 0; i < obj.length; i++) {
        copyArray[i] = deepCopy(obj[i]);
      }
      return copyArray;
    }
  
    const copyObj = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        copyObj[key] = deepCopy(obj[key]);
      }
    }
    return copyObj;
  }
