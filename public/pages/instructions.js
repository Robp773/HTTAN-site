'use strict'
// array of steps 
let steps = ['one', 'two', 'three', 'four', 'five']
// counter for where user is in steps
let stepsIndex = 0

$(function () {
  // set play back rate of bg video to be 50% of normal time
  // cuts down on video resets while 60 seconds of loading is passing
  // not working with jQuery for unknown reason
  var vid = document.getElementById("videoEl");
  vid.playbackRate = 0.5;
  // next button clicks
  $('.next').click(function () {
    //   if user is at last step, return
    if (stepsIndex === steps.length - 1) {
      return
    }

    // current visible step
    let element = $(`.step-${steps[stepsIndex]}`)
    // fade current step to 0 opacity
    element.animate({
      opacity: 0
    }, 1000, function () {
      // when opacity is at 0 display: none
      element.css('display', 'none')
      stepsIndex++
      //   make next element visible - elements by default are display: none
      // with 0 opacity
      $(`.step-${steps[stepsIndex]}`).css('display', 'flex')
      // raise opacity from 0 to 1
      $(`.step-${steps[stepsIndex]}`).animate({
        opacity: 1
      }, 1000)
    })
  })

  $('.prev').click(function () {
    if (stepsIndex === 0) {
      return;
    }
    let element = $(`.step-${steps[stepsIndex]}`)
    element.animate({
      opacity: 0
    }, 1000, function () {
      element.css('display', 'none')
      stepsIndex--
      $(`.step-${steps[stepsIndex]}`).css('display', 'flex')
      $(`.step-${steps[stepsIndex]}`).animate({
        opacity: 1
      }, 1000)
    })
  })
  runLoading()
})

// runs on page load (after begin button is pressed)
// runs loading screen for x seconds
// fades loading screen opacity out, sets it to display none, and makes intro and step elements visible
function runLoading() {
  setTimeout(function () {
    $('.loading').animate({
      opacity: 0
    }, 1000, function () {
      $('.loading').css('display', 'none')
      $('.steps-intro').css('display', 'flex')
      $('.step-parent').css('display', 'flex')
    })
  }, 60000)
  // once intro is finished, it hides it and brings up the first step
  // first timeout amount + 7000 ms to account for all animation durations - keeps transitions smooth
  setTimeout(function () {
    $('.steps-intro').hide()
    // display first step
    $('.step-one').css('display', 'flex')
  }, 67000)
}