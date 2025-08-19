/*
Challenge 1:
Given an array of numbers, return an array of each number, squared
*/
const nums = [1, 2, 3, 4, 5];
// -->       [1, 4, 9, 16, 25]
// Your code here

function squared(nums) {
  let squared = nums.map((x) => x * x);
  return squared;
}

/*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/

const names = ["alice", "bob", "charlie", "danielle"];
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here

function capitalized(names) {
  let fixed = names.map((name) => fixLetters(name));
  // Split the item into letters
  // Get the first letter and capitalise it.
  // join the letters back to a string
  return fixed;
}

function fixLetters(name) {
  let letters = name.split("");
  let firstLetterCapital = letters[0].toUpperCase();
  letters[0] = firstLetterCapital;
  let fixed = letters.join("");
  return fixed;
}

/*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here

function paragraphWrap(pokemon) {
  return pokemon.map((name) => "<p>" + name + "</p>");
}
