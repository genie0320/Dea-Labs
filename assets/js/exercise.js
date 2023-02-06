/** @format */

// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"
// NOTE: querySelector returns only first matching element.
let btn01 = document.querySelector('button');
//    - Select the second button by using an "id"
let btn02 = document.getElementById('change-color');

// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored

//    - Output the second button WITHOUT using the variable in which it's stored

// function removePara01() {
//   console.dir(btn01);
// }

// function changePara02(e) {
//   console.dir(e.target);
// }

// btn01.addEventListener('click', removePara01);
// btn02.addEventListener('click', changePara02);

// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
const paras = document.querySelector('section').children;
const para01 = document.body.children[2].children[1];
const para02 = para01.nextElementSibling.nextElementSibling;
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!
// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)

//    - The second button changes the background color of the first paragraph to blue

function removePara01() {
  para02.remove();
}
function changePara02(e) {
  para01.style.backgroundColor = 'blue';
}

btn01.addEventListener('click', removePara01);
btn02.addEventListener('click', changePara02);
// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!
