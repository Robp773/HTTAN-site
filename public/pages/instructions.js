'use strict';
// array of steps 
let steps = ['one', 'two', 'three', 'four', 'five'];
// counter for where user is in steps
let stepsIndex = 0;

$(function () {

  // next button clicks
  $('.next').click(function () {
    //   if user is at last step, return
    if (stepsIndex === steps.length - 1) {
      return;
    }

    // current visible step
    let element = $(`.step-${steps[stepsIndex]}`);
    // fade current step to 0 opacity
    element.animate({
      opacity: 0
    }, 1000, function () {
      // when opacity is at 0 display: none
      element.css('display', 'none');
      stepsIndex++;
      //   make next element visible - elements by default are display: none
      // with 0 opacity
      $(`.step-${steps[stepsIndex]}`).css('display', 'flex');
      // raise opacity from 0 to 1
      $(`.step-${steps[stepsIndex]}`).animate({
        opacity: 1
      }, 1000);
    });
  });

  $('.prev').click(function () {
    if (stepsIndex === 0) {
      return;
    }
    let element = $(`.step-${steps[stepsIndex]}`);
    element.animate({
      opacity: 0
    }, 1000, function () {
      element.css('display', 'none');
      stepsIndex--;
      $(`.step-${steps[stepsIndex]}`).css('display', 'flex');
      $(`.step-${steps[stepsIndex]}`).animate({
        opacity: 1
      }, 1000);
    });
  });

  // once starting animation has finished when page first loads, remove starting elements to make room for steps
  setTimeout(function () {
    $('.steps-intro').hide();
    // display first step
    $('.step-one').css('display', 'flex');
  }, 6000);
});
