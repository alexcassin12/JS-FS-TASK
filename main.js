function main(arr) {
  // Manipulate input
  const flatArr = arr.flat(Infinity);
  const idArr = [];
  flatArr.forEach((obj) => {
    idArr.push(obj.id);
  });
  const set = Array.from(new Set(idArr));

  // Calculate number of duplicates
  const count = {};

  idArr.forEach((el) => {
    count[el] = (count[el] || 0) + 1;
  });

  const allQuantitiesArr = Object.values(count);

  // Calculate number of different variables
  const numberOfVariables = allQuantitiesArr.reduce((prev, curr) => {
    return prev * curr;
  }, 1);

  // Re-format data to return
  const objectArrFromSet = set.map((v) => {
    return { id: v };
  });
  const toReturn = [];

  for (let i = 0; i < numberOfVariables; i++) {
    toReturn.push(objectArrFromSet);
  }

  return toReturn;
}

const array = [{ id: 1 }, { id: 1 }, { id: 2 }, { id: 2 }, { id: 3 }];
main(array);
