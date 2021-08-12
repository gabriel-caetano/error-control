export default function hamming(input) {
  const output = input + '101';
  // const chars = input.split('');

  // let prevOne = -1;
  // let val;
  // const nestedPoints = chars.map((char, index) => {
  //   if (char === '1') {
  //     val = prevOne * -1;
  //     prevOne = val;
  //   } else {
  //     val = 0;
  //   }
  //   return [
  //     { x: index, y: val },
  //     { x: index + 1, y: val },
  //   ];
  // });
  // const output = nestedPoints.flat();
  return output;
}
