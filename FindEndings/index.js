/*
You are reading a Build Your Own Story book. It is like a normal book except that choices on some pages affect the story, sending you to one of two options for your next page.

These choices are really stressing you out, so you decide that you'll either always pick the first option, or always pick the second option.

You start reading at page 1 and read forward one page at a time unless you reach a choice or an ending.

The choices are provided in a list, sorted by the page containing the choice, and each choice has two options of pages to go to next. In this example, you are on page 3, where there is a choice. Option 1 goes to page 14 and Option 2 goes to page 2.

choices1 = [[3, 14, 2]] => [current_page, option_1, option_2]
The ending pages are also given in a sorted list:

endings = [6, 15, 21, 30]

Given a list of endings, a list of choices with their options, and the choice you will always take (Option 1 or Option 2), return the ending you will reach. If you get stuck in a loop, return -1.


find_ending(endings, choices2, 1) => 21
choices2 = [[5, 11, 28], [9, 19, 29], [14, 16, 20], [18, 7, 22], [29, 6, 30]]
endings = [6, 15, 21, 30]
1,2,3,4,5,28,12,13,14,16,17,18,7,8,9,19,20,21


Example:
findEnding(endings, choices1, 1) (always Option 1)
  Start: 1 -> 2 -> 3(choice) -> 14 -> 15(end) => Return 15

findEnding(endings, choices1, 2) (always Option 2)
  Start: 1 -> 2 -> 3(choice) -> 2 -> 3(choice) -> 2... => Return -1

Additional inputs:
choices2 = [[5, 11, 28], [9, 19, 29], [14, 16, 20], [18, 7, 22], [25, 6, 30]]
choices3 = []
choices4 = [[2, 10, 15], [3, 4, 10], [4, 3, 15], [10, 3, 15]]

Complexity Variable:
n = number of pages
(endings and choices are bound by the number of pages)
*/

const endings = [6, 15, 21, 30];
const choices1 = [[3, 14, 2]];
const choices2 = [
  [5, 11, 28],
  [9, 19, 29],
  [14, 16, 20],
  [18, 7, 22],
  [25, 6, 30]
];
const choices3 = [];
const choices4 = [
  [2, 10, 15],
  [3, 4, 10],
  [4, 3, 15],
  [10, 3, 15]
];

// find_ending(endings, choices2, 1) => 21
// choices2 = [[5, 11, 28], [9, 19, 29], [14, 16, 20], [18, 7, 22], [29, 6, 30]]
// endings = [6, 15, 21, 30]
// 1,2,3,4,5,28,12,13,14,16,17,18,7,8,9,19,20,21

const findEnding = (endings, choices, option) => {
  let currentPage = 1;
  let takenChoices = [];
  while (!endings.includes(currentPage)) {
    let found = false;
    if (takenChoices.includes(currentPage)) {

      return -1;
    }
    
    for (let i = 0; i < choices.length; i++) {
      let curr = choices[i];
      if (curr[0] == currentPage) {
        takenChoices.push(currentPage);
        currentPage = curr[option];
        found = true;
        break;
      }
    }

    if (!found) {
      currentPage++;
    }
  }

  return currentPage;
};


console.log(findEnding(endings, choices1, 1)) // => 15
console.log(findEnding(endings, choices1, 2)) // => -1
console.log(findEnding(endings, choices2, 1)) // => 21
console.log(findEnding(endings, choices2, 2)) // => 30
console.log(findEnding(endings, choices3, 1)) // => 6
console.log(findEnding(endings, choices3, 2)) // => 6
console.log(findEnding(endings, choices4, 1)) // => -1
console.log(findEnding(endings, choices4, 2)) // => 15