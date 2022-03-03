// Coding Question 1

function verify(text) {
  // for the openings and closings parenthesis the array of strings
  const openings = ["[", "<", "("];
  const closings = ["]", ">", ")"];

  //it splits the string into individual characters
  const textArray = text.split("");
  // console.log(textArray)
  // empty stack
  const stack = [];
  // an Object with the parenthesis as an key value pair
  const map = {
    "[": "]",
    "<": ">",
    "(": ")",
  };
  // the for loop will iterate through text
  for (let i = 0; i < textArray.length; i++) {
    // created a variable item and assign the
    //textArray[i] because it will be used many time
    const item = textArray[i];
    // checking if the openings bracket are present in openings Array
    // and if the opening bracket are present in openings array
    // we are pushing them directly in to the stack..
    if (openings.includes(item)) {
      console.log("isOpening");
      stack.push(item);
      console.log(stack);
    }
    // here we are checking if the closing bracket are present in Closings array
    // and the last items from the stack is will pop of from the stack
    else if (closings.includes(item) && map[stack[stack.length - 1]] === item) {
      console.log("isClosing");
      console.log(closings.includes(item));
      stack.pop();
      console.log(stack);
    }
  }
  if (stack.length) {
    return 0;
  } else {
    return 1;
  }
}

// coding question 2

function func(s, a, b) {
  let match_empty = /^$/;
  if (s.match(match_empty)) {
    return -1;
  } else {
    for (
      let i = s.length - 1, aIndex = -1, bIndex = -1;
      aIndex == -1 && bIndex == -1 && i >= 0;

    ) {
      s.substring(i, i + 1) == a && (aIndex = i);
      s.substring(i, i + 1) == b && (bIndex = i);
      i--;

      if (aIndex != -1) {
        return bIndex == -1 ? aIndex : Math.max(aIndex, bIndex);
      } else {
        return bIndex != -1 ? bIndex : -1;
      }
    }
  }
}

console.log({
  case_1: func("", "", ""),
  case_2: func("ddd", "//", "$^"),
  case_3: func("ddd", "ddd", "d"),
});

// very tough for me ...
