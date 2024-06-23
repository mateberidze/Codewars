const sumConsecutives = list =>
  list.reduce((accumulator, curr, i, list) => {
    if (curr !== list[i - 1]) accumulator.push(curr);
    else accumulator[accumulator.length - 1] += curr;
    return accumulator;
  }, []);