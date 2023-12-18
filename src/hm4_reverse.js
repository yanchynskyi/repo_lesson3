//reverse function
function reverse(text) {
  let result = "";

  for (let i = text.length - 1; i >= 0; i--) {
    result += text[i];
  }

  return result;
}

console.log(reverse("text")); // output: txet
