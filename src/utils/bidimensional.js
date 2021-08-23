export default function bidimensional(input, size) {
  if (input.length > 0) {
    size = parseInt(size);
    const chunks = [];
    for (let i = 0; i < input.length; i += size) {
      chunks.push(input.substring(i, i + size));
    }
    const last = chunks.length - 1;
    chunks[last] = "0".repeat(size - chunks[last].length) + chunks[last];
    const ret_input = chunks.join(" ");
    for (const i in chunks) {
      const count =
        chunks[i].split("").reduce((a, b) => {
          return parseInt(a) + parseInt(b);
        }) % 2;
      chunks[i] = chunks[i] + count;
    }
    let str = "";
    for (let i = 0; i < size + 1; i++) {
      let count = 0;
      for (let j in chunks) {
        count += chunks[j][i];
      }
      str += count % 2;
    }
    chunks.push(str);

    return { input: ret_input, output: chunks.join(" ") };
  }
  return { input: "", output: "" };
}
