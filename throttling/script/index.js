let t = 0;
const getData = (type) => {
  if (type == "throttle") {
    console.log("Do something " + t++);
    document.querySelector(".throttle").innerHTML = "Key stroke detected " + t;
  }
};

const throttling_handler = (fn, limit) => {
  let flag = true;
  return function () {
    if (flag) {
      fn("throttle");
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};

let throttling = throttling_handler(getData, 500);
