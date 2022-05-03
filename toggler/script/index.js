function toggler() {
  var arr = arguments;
  var index = -1;
  return function () {
    index = index + 1;
    if (index >= arr.length) {
      index = 0;
    }
    return arr[index];
  };
}

const toggle = toggler(1, 2, 3);

addEventListener("click", () => {
  let on = document.getElementById("on");
  let div = document.createElement("div");
  div.innerText = toggle();
  document.querySelector("body").append(div);
});

// console.log(toggle());
// console.log(toggle());
// console.log(toggle());
// console.log(toggle());
// console.log(toggle());
// console.log(toggle());
