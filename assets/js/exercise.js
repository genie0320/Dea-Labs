/** @format */

// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"
let btn01 = document.querySelector('button');
//    - Select the second button by using an "id"
let btn02 = document.getElementById('change-color');

// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored
btn01.addEventListener('click', console.dir);
//    - Output the second button WITHOUT using the variable in which it's stored
btn02.addEventListener('click', console.dir);

// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
const paras = document.querySelector('section').children;
const para01 = paras[1];
const para02 = paras[5];
console.log(para02);
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!
// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)

function removePara01() {
  paras.removeChild(para01);
}
btn01.addEventListener('click', removePara01);
//    - The second button changes the background color of the first paragraph to blue
function changePara02() {
  para02.style.backgroundColor = 'blue';
}
btn02.addEventListener('click', changePara02);

// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!
