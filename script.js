"use strict";

let is128on = false;
let is64on = false;
let is32on = false;
let is16on = false;
let is8on = false;
let is4on = false;
let is2on = false;
let is1on = false;

const numberCont1 = document.querySelector(".number-container");
const numberCont2 = document.querySelector(".number2-container");

const btn_128 = document.querySelector(".btn_128");
const btn_64 = document.querySelector(".btn_64");
const btn_32 = document.querySelector(".btn_32");
const btn_16 = document.querySelector(".btn_16");
const btn_8 = document.querySelector(".btn_8");
const btn_4 = document.querySelector(".btn_4");
const btn_2 = document.querySelector(".btn_2");
const btn_1 = document.querySelector(".btn_1");
const buttons = document.querySelector(".button");

const plus128 = document.querySelector(".plus-128");
const plus64 = document.querySelector(".plus-64");
const plus32 = document.querySelector(".plus-32");
const plus16 = document.querySelector(".plus-16");
const plus8 = document.querySelector(".plus-8");
const plus4 = document.querySelector(".plus-4");
const plus2 = document.querySelector(".plus-2");
const plus1 = document.querySelector(".plus-1");

const btnRoll = document.querySelector(".roll-btn");
const clearBtn = document.querySelector(".clear-btn");
const theNumberToConvert = document.querySelector(".number");
const theSumOfBits = document.querySelector(".clickSum");

let rnd;
let answer = 0;

// enable disable buttons using boolian (true buttons work)
function btnControl(state) {
  if (state === true) {
    btn_128.disabled = false;
    btn_64.disabled = false;
    btn_32.disabled = false;
    btn_16.disabled = false;
    btn_8.disabled = false;
    btn_4.disabled = false;
    btn_2.disabled = false;
    btn_1.disabled = false;
  }
  if (state === false) {
    btn_128.disabled = true;
    btn_64.disabled = true;
    btn_32.disabled = true;
    btn_16.disabled = true;
    btn_8.disabled = true;
    btn_4.disabled = true;
    btn_2.disabled = true;
    btn_1.disabled = true;
  }
}

function isRight(num) {
  return num === rnd;
}

function win() {
  //   document
  //     .querySelector(".number-container")
  //     .classList.add("number-container-win");
  numberCont1.classList.add("number-container-win");
  numberCont2.classList.add("number-container-win");
  document.querySelector(".number").classList.add("number-win");
  btnControl(false);
}

const resetBtns = function () {
  btn_128.setAttribute("value", "0");
  btn_64.setAttribute("value", "0");
  btn_32.setAttribute("value", "0");
  btn_16.setAttribute("value", "0");
  btn_8.setAttribute("value", "0");
  btn_4.setAttribute("value", "0");
  btn_2.setAttribute("value", "0");
  btn_1.setAttribute("value", "0");

  plus128.classList.add("hide");
  plus64.classList.add("hide");
  plus32.classList.add("hide");
  plus16.classList.add("hide");
  plus8.classList.add("hide");
  plus4.classList.add("hide");
  plus2.classList.add("hide");
  plus1.classList.add("hide");

  btn_128.classList.remove("bulbOn");
  btn_64.classList.remove("bulbOn");
  btn_32.classList.remove("bulbOn");
  btn_16.classList.remove("bulbOn");
  btn_8.classList.remove("bulbOn");
  btn_4.classList.remove("bulbOn");
  btn_2.classList.remove("bulbOn");
  btn_1.classList.remove("bulbOn");
};

// console.log(bulb128);
// console.log(bulb64);
// console.log(theNumberToConvert);

btn_128.addEventListener("click", function () {
  if (is128on === false) {
    btn_128.classList.add("bulbOn");
    btn_128.setAttribute("value", "1");
    plus128.classList.remove("hide");
    is128on = true;
    answer += 128;
    theSumOfBits.textContent = answer;
    // theSumOfBits.textContent = rnd - 128; // subtract the btn value from the rnd
    console.log(answer);
  } else if (is128on === true) {
    console.log("click");
    btn_128.classList.remove("bulbOn");
    btn_128.setAttribute("value", "0");
    plus128.classList.add("hide");
    is128on = false;
    answer -= 128;
    theSumOfBits.textContent = answer;
    console.log(answer);
  }
  if (isRight(answer)) {
    win();
  }
});
btn_64.addEventListener("click", function () {
  if (is64on === false) {
    btn_64.classList.add("bulbOn");
    btn_64.setAttribute("value", "1");
    plus64.classList.remove("hide");
    is64on = true;
    answer += 64;
    theSumOfBits.textContent = answer;
    console.log(answer);
  } else if (is64on === true) {
    console.log("click");
    btn_64.classList.remove("bulbOn");
    btn_64.setAttribute("value", "0");
    plus64.classList.add("hide");
    is64on = false;
    answer -= 64;
    theSumOfBits.textContent = answer;
    console.log(answer);
  }
  if (isRight(answer)) {
    win();
  }
});

btn_32.addEventListener("click", function () {
  if (is32on === false) {
    btn_32.classList.add("bulbOn");
    btn_32.setAttribute("value", "1");
    plus32.classList.remove("hide");
    is32on = true;
    answer += 32;
    theSumOfBits.textContent = answer;
    console.log(answer);
  } else if (is32on === true) {
    console.log("click");
    btn_32.classList.remove("bulbOn");
    btn_32.setAttribute("value", "0");
    plus32.classList.add("hide");
    is32on = false;
    answer -= 32;
    theSumOfBits.textContent = answer;
    console.log(answer);
  }
  if (isRight(answer)) {
    win();
  }
});

btn_16.addEventListener("click", function () {
  if (is16on === false) {
    btn_16.classList.add("bulbOn");
    btn_16.setAttribute("value", "1");
    plus16.classList.remove("hide");
    is16on = true;
    answer += 16;
    theSumOfBits.textContent = answer;
    console.log(answer);
  } else if (is16on === true) {
    console.log("click");
    btn_16.classList.remove("bulbOn");
    btn_16.setAttribute("value", "0");
    plus16.classList.add("hide");
    is16on = false;
    answer -= 16;
    theSumOfBits.textContent = answer;
    console.log(answer);
  }
  if (isRight(answer)) {
    win();
  }
});

btn_8.addEventListener("click", function () {
  if (is8on === false) {
    btn_8.classList.add("bulbOn");
    btn_8.setAttribute("value", "1");
    plus8.classList.remove("hide");
    is8on = true;
    answer += 8;
    theSumOfBits.textContent = answer;
    console.log(answer);
  } else if (is8on === true) {
    console.log("click");
    btn_8.classList.remove("bulbOn");
    btn_8.setAttribute("value", "0");
    plus8.classList.add("hide");
    is8on = false;
    answer -= 8;
    theSumOfBits.textContent = answer;
    console.log(answer);
  }
  if (isRight(answer)) {
    win();
  }
});

btn_4.addEventListener("click", function () {
  if (is4on === false) {
    btn_4.classList.add("bulbOn");
    btn_4.setAttribute("value", "1");
    plus4.classList.remove("hide");
    is4on = true;
    answer += 4;
    theSumOfBits.textContent = answer;
    console.log(answer);
  } else if (is4on === true) {
    console.log("click");
    btn_4.classList.remove("bulbOn");
    btn_4.setAttribute("value", "0");
    plus4.classList.add("hide");
    is4on = false;
    answer -= 4;
    theSumOfBits.textContent = answer;
    console.log(answer);
  }
  if (isRight(answer)) {
    win();
  }
});

btn_2.addEventListener("click", function () {
  if (is2on === false) {
    btn_2.classList.add("bulbOn");
    btn_2.setAttribute("value", "1");
    plus2.classList.remove("hide");
    is2on = true;
    answer += 2;
    theSumOfBits.textContent = answer;
    console.log(answer);
  } else if (is2on === true) {
    console.log("click");
    btn_2.classList.remove("bulbOn");
    btn_2.setAttribute("value", "0");
    plus2.classList.add("hide");
    is2on = false;
    answer -= 2;
    theSumOfBits.textContent = answer;
    console.log(answer);
  }
  if (isRight(answer)) {
    win();
  }
});

btn_1.addEventListener("click", function () {
  if (is1on === false) {
    btn_1.classList.add("bulbOn");
    btn_1.setAttribute("value", "1");
    plus1.classList.remove("hide");
    is1on = true;
    answer += 1;
    theSumOfBits.textContent = answer;
    console.log(answer);
  } else if (is1on === true) {
    console.log("click");
    btn_1.classList.remove("bulbOn");
    btn_1.setAttribute("value", "0");
    plus1.classList.add("hide");
    is1on = false;
    answer -= 1;
    theSumOfBits.textContent = answer;
    console.log(answer);
  }
  if (isRight(answer)) {
    win();
  }
});

btnRoll.addEventListener("click", function () {
  console.log("Click");
  rnd = Math.trunc(Math.random() * 255) + 1;
  console.log(`new number: ${rnd}`);
  theNumberToConvert.textContent = rnd;
  theNumberToConvert.classList.remove("hidden");
  theSumOfBits.textContent = answer;
  theSumOfBits.classList.remove("hidden");
  answer = 0;
  theSumOfBits.textContent = answer;
  is128on = false;
  is64on = false;
  is32on = false;
  is16on = false;
  is8on = false;
  is4on = false;
  is2on = false;
  is1on = false;
  btnControl(true);

  resetBtns();
  // buttons.setAttribute('value', '0');
  //   btn_128.setAttribute("value", "0");
  //   btn_64.setAttribute("value", "0");
  //   btn_32.setAttribute("value", "0");
  //   btn_16.setAttribute("value", "0");
  //   btn_8.setAttribute("value", "0");
  //   btn_4.setAttribute("value", "0");
  //   btn_2.setAttribute("value", "0");
  //   btn_1.setAttribute("value", "0");

  //   plus128.classList.add("hide");
  //   plus64.classList.add("hide");
  //   plus32.classList.add("hide");
  //   plus16.classList.add("hide");
  //   plus8.classList.add("hide");
  //   plus4.classList.add("hide");
  //   plus2.classList.add("hide");
  //   plus1.classList.add("hide");

  //   btn_128.classList.remove("bulbOn");
  //   btn_64.classList.remove("bulbOn");
  //   btn_32.classList.remove("bulbOn");
  //   btn_16.classList.remove("bulbOn");
  //   btn_8.classList.remove("bulbOn");
  //   btn_4.classList.remove("bulbOn");
  //   btn_2.classList.remove("bulbOn");
  //   btn_1.classList.remove("bulbOn");

  document.querySelector(".button").classList.remove("bulbOn");
  //   document
  //     .querySelector(".number-container")
  //     .classList.remove("number-container-win");
  numberCont1.classList.remove("number-container-win");
  numberCont2.classList.remove("number-container-win");
  document.querySelector(".number").classList.remove("number-win");
});

clearBtn.addEventListener("click", function () {
  theSumOfBits.textContent = "0";
  resetBtns();
  answer = 0;
  is128on = false;
  is64on = false;
  is32on = false;
  is16on = false;
  is8on = false;
  is4on = false;
  is2on = false;
  is1on = false;

  numberCont1.classList.remove("number-container-win");
  numberCont2.classList.remove("number-container-win");

  //   document
  //     .querySelector(".number-container")
  //     .classList.remove("number-container-win");
  theNumberToConvert.classList.remove("number-win");
  theNumberToConvert.classList.add("hidden");
  btnControl(true);
});
// I do not want to disable buttons before rolling a new number
// btnControl(false);

btn_128.addEventListener("mouseover", function () {
  this.value = "128";
});

btn_128.addEventListener("mouseout", function () {
  //   mouseout();..if (is128on) {
  if (is128on) {
    this.setAttribute("value", "1");
  } else {
    this.setAttribute("value", "0");
  }
});

btn_64.addEventListener("mouseover", function () {
  this.value = "64";
});

btn_64.addEventListener("mouseout", function () {
  //   mouseout();..if (is64on) {
  if (is64on) {
    this.setAttribute("value", "1");
  } else {
    this.setAttribute("value", "0");
  }
});

btn_32.addEventListener("mouseover", function () {
  this.value = "32";
});

btn_32.addEventListener("mouseout", function () {
  //   mouseout();..if (is32on) {
  if (is32on) {
    this.setAttribute("value", "1");
  } else {
    this.setAttribute("value", "0");
  }
});

btn_16.addEventListener("mouseover", function () {
  this.value = "16";
});

btn_16.addEventListener("mouseout", function () {
  //   mouseout();..if (is16on) {
  if (is16on) {
    this.setAttribute("value", "1");
  } else {
    this.setAttribute("value", "0");
  }
});

btn_8.addEventListener("mouseover", function () {
  this.value = "8";
});

btn_8.addEventListener("mouseout", function () {
  //   mouseout();..if (is8on) {
  if (is8on) {
    this.setAttribute("value", "1");
  } else {
    this.setAttribute("value", "0");
  }
});

btn_4.addEventListener("mouseover", function () {
  this.value = "4";
});

btn_4.addEventListener("mouseout", function () {
  //   mouseout();..if (is4on) {
  if (is4on) {
    this.setAttribute("value", "1");
  } else {
    this.setAttribute("value", "0");
  }
});

btn_2.addEventListener("mouseover", function () {
  this.value = "2";
});

btn_2.addEventListener("mouseout", function () {
  //   mouseout();..if (is2on) {
  if (is2on) {
    this.setAttribute("value", "1");
  } else {
    this.setAttribute("value", "0");
  }
});

btn_1.addEventListener("mouseover", function () {
  this.value = "1";
});

btn_1.addEventListener("mouseout", function () {
  //   mouseout();..if (is1on) {
  if (is1on) {
    this.setAttribute("value", "1");
  } else {
    this.setAttribute("value", "0");
  }
});
