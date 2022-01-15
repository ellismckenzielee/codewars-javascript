/*Escape HTML Markup kata
https://www.codewars.com/kata/52c7c425f80c299ac60003df
*/

var escapeHTML = function (str) {
  const updatedStr = str.replace(/[<>"]/g, (x, y, z) => {
    const updated = "&" + ["lt;", "gt;", "quot;"][["<", ">", '"'].indexOf(x)];
    return updated;
  });
  return updatedStr;
};
