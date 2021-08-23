export default function hamming(input) {
  if (input.length > 0) {
    let currPow = 1;
    let count = 1;
    let inputChar = 0;
    const arrRes = [];
    while (true) {
      if (input.length <= inputChar) break;
      if (count === currPow) {
        arrRes.push("_");
        currPow *= 2;
      } else {
        arrRes.push(input[inputChar]);
        inputChar++;
      }
      count++;
    }
    currPow = 1;
    const output = arrRes.map((char, idx) => {
      if (idx + 1 === currPow) {
        let sum = 0;
        for (let i = currPow + 1; i <= arrRes.length; i++) {
          // para fazer parte da soma o módulo da potência seguinte
          // deve resultar em um valor maior do que a potência atual
          if (i % (2 * currPow) >= currPow) {
            sum += Number(arrRes[i - 1]);
          }
        }
        currPow *= 2;
        return sum % 2;
      } else {
        return char;
      }
    });
    const res = { input: arrRes.join(""), output: output.join("") };
    return res;
  }
  return { input: "", output: "" };
}
