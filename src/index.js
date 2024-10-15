module.exports = function reverse (n) {
  const str = String(Math.abs(n));
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    newStr = str[i] + newStr;
  }

  return Number(newStr);
}
