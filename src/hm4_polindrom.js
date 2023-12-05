//polindrom function
function isPolindrom(text) {
  let result;
  let firstHalf = "";
  let secondHalf = "";

  // define the both halfs of text if there is EVEN number of symbols
  if (text.length % 2 == 0) {
    //define first half of text
    for (let i = 0; i < text.length / 2; i++) {
      firstHalf += text[i];
    }
    //define second half of text
    for (let i = text.length - 1; i >= text.length / 2; i--) {
      secondHalf += text[i];
    }
  }

  // define the both halfs of text if there is ODD number of symbols
  if (text.length % 2 != 0) {
    //define first half of text
    for (let i = 0; i < Math.floor(text.length / 2); i++) {
      firstHalf += text[i];
    }
    //define second half of text
    for (let i = text.length - 1; i > Math.floor(text.length / 2); i--) {
      secondHalf += text[i];
    }
  }

  //compare two of parts
  if (firstHalf == secondHalf) {
    result = true;
  } else result = false;

  return result;
}

console.log(isPolindrom("pettep")); // output: true
console.log(isPolindrom("petntep")); // output: true
console.log(isPolindrom("pectep")); // output: false
console.log(isPolindrom("pecttep")); // output: false
