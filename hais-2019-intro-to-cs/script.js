let step = 1;
let stepCount;
document.addEventListener("DOMContentLoaded", function(event) {
  window.scrollTo(0, 0);
  step = 1;
  stepCount = document.querySelectorAll(".root>li").length;
  console.log('stepCount',stepCount);
  document.querySelectorAll(".root>li").forEach(element => {
    element.style.cssText = "visibility: hidden;";
  });
  document.querySelectorAll(".root>li")[0].style.cssText = "visibility:visible";
  document.querySelector(".progress-bar").style.cssText = `width:${(step / stepCount) * 100}%`;
});

document.onkeydown = e => {
  console.log("e.keyCode", e.keyCode);
  e = e || window.event;
  if (e.keyCode == "72") {
    // h - hide
    document.querySelectorAll(".root>li").forEach(element => {
      element.style.cssText = "visibility: hidden;";
    });
  } else if (e.keyCode == "83") {
    // s - show
    document.querySelectorAll(".root>li").forEach(element => {
      element.style.cssText = "visibility: visible;";
    });
  } else if (e.keyCode == "37") {
    // left arrow
    step = step - 1;
    if (step < 0) {
      step = 0;
    }
    document.querySelectorAll(".root>li").forEach(element => {
      element.style.cssText = "visibility: hidden;";
    });
    const steps = document.querySelectorAll(".root>li");
    document.querySelector(".progress-bar").style.cssText = `width:${(step / stepCount) * 100}%`;
    for (let index = 0; index < step; index++) {
      const element = steps[index];
      element.style.cssText = "visibility: visible;";
    }
  } else if (e.keyCode == "39") {
    // right arrow
    const steps = document.querySelectorAll(".root>li");
    step++;
    if (step > stepCount) {
      step = stepCount;
    }
    console.log("stepCount", step / stepCount);
    document.querySelector(".progress-bar").style.cssText = `width:${(step / stepCount) * 100}%`;
    for (let index = 0; index < step; index++) {
      const element = steps[index];
      element.style.cssText = "visibility: visible;";
    }
  }
};
