function createItem(i, arr) {
  // STEP 1: create elements
  const p = document.createElement("p");

  const btn = document.createElement("button");
  btn.className = "remove_button";
  btn.dataset.key = i;
  btn.textContent = "finished";

  // STEP 2: connect JavaScript to THIS button
  btn.addEventListener("click", function () {
    console.log("Finished clicked for index:", i);
    // second part of JS goes here
  });

  // assemble HTML
  p.appendChild(btn);
  p.append(` ${i} ${arr[i]}`);

  return p;
}