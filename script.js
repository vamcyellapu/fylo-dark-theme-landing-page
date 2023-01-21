"use strict";

const input = document.getElementById("input");
const errMsg = document.getElementById("err-msg");

const btn = document.getElementById("btn");
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
btn.addEventListener("click", function () {
  const email = validateEmail(input.value);

  if (!email) {
    errMsg.classList.remove("hidden");
  } else {
    errMsg.classList.add("hidden");
  }
});
input.addEventListener("keydown", function (e) {
  const email = validateEmail(input.value);
  if (input.value === "") {
    errMsg.classList.add("hidden");
  }
});
