const load = () => {
  const input = document.querySelector(".search");
  const typedValues = document.querySelector(".typed-values");

  const debounce = (callback, milliseconds) => {
    let timeout;

    return (argument) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => callback(argument), milliseconds);
    };
  };

  const debounce2 =
    (fn, delay, timeout = 0) =>
    (args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn(args), delay);
    };

  const onKeyup = (e) => {
    const inputValue = e.target.value;
    const listItem = document.createElement("li");
    listItem.innerHTML =
      inputValue + ` <i>(${new Date().toLocaleTimeString()})</i>`;
    typedValues.prepend(listItem);
  };

  input.addEventListener("keyup", debounce2(onKeyup, 500));
};

document.addEventListener("DOMContentLoaded", load);
