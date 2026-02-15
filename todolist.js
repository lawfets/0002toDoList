/* this isn't working yet. I found some problems with localStorage 
that aren't too easy to solve. I might try using an array to save the
different listings, work with array, and only save to localStorage
when I want to close the page. Be mindfull, this is just exercise
not real world. */

/* what I need to use to save to localStorage:
example
const arr = ["A", "B", "C"];

window.addEventListener("beforeunload", () => {
  localStorage.setItem("myArray", JSON.stringify(arr));
});
*/
/* what I need to call back the elements from storage:
const saved = localStorage.getItem("myArray");
const arr = saved ? JSON.parse(saved) : [];
*/

let inputTDL = document.getElementById('list_element');
let inputListing = document.getElementById('list_div');
const buttonList = document.getElementById('list_button');
const buttonClear = document.getElementById('clear_button');
// const buttonRemove = document.getElementById('remove_button');
let StorageLengthPlusOne = localStorage.length + 1;
let strStorageLengthPlusOne = StorageLengthPlusOne.toString();

document.addEventListener("DOMContentLoaded", () => {
    showListing();
});

buttonList.addEventListener("click", function() {
    if (inputTDL.value !== "") {
        localStorage.setItem( localStorage.length + 1 , inputTDL.value);
        inputListing.innerHTML = "";
        inputTDL.value = "";
        showListing();
    } 
});

buttonClear.addEventListener("click", function () {
    localStorage.clear();
    inputListing.innerHTML = "";
});





