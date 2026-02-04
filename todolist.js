const inputTDL = document.getElementById('list_element');
let inputListing = document.getElementById('list_div');
const buttonList = document.getElementById('list_button');
const buttonClear = document.getElementById('clear_button')
let StorageLengthPlusOne = localStorage.length + 1;
let strStorageLengthPlusOne = StorageLengthPlusOne.toString();

buttonList.addEventListener("click", function() {
    if (inputTDL == "") {
    return;
    } else {
    localStorage.setItem( localStorage.length + 1 , inputTDL.value);
    }
});

buttonClear.addEventListener("click", function () {
    localStorage.clear();
    inputListing.innerHTML = "";
});

for (i = 0; i <= localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    inputListing.innerHTML += `<p>${value} <button class="remove_button" data-key="${key}">finished</button></p>`;

};







