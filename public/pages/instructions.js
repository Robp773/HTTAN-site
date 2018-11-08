'use strict'
// array of steps 
let steps = ['one', 'two', 'three', 'four', 'five']
// counter for where user is in steps
let stepsIndex = 0

let loadingCounter = 0;

$(function () {

  let loadingTracker = setInterval(function () {
    if (loadingCounter === 59) {
      $('.loading').animate({
        opacity: 0
      }, 500, function () {
        $('.loading').css('display', 'none')
        $('.steps-intro').css('display', 'flex')
        $('.step-parent').css('display', 'flex')
        setTimeout(function () {
          $('.steps-intro').hide()
          // display first step
          $(`.step-${steps[stepsIndex]}`).css('opacity', '0')
          $(`.step-${steps[stepsIndex]}`).css('display', 'flex')
          $(`.step-${steps[stepsIndex]}`).animate({
            opacity: 1
          }, 500)
          // 67000
        }, 5000)
      })
      clearInterval(loadingTracker)
    }
    loadingCounter++;
  }, 1000)
  // set play back rate of bg video to be 50% of normal time
  // cuts down on video resets while 60 seconds of loading is passing
  // not working with jQuery for unknown reason
  var vid = document.getElementById("videoEl");
  vid.playbackRate = 0.75;
  // next button clicks

  $('.loading__refresh-btn').on('click', function () {
    loadingCounter = 0;
  })
  $('.next').click(function () {
    //   if user is at last step, return
    if (stepsIndex === steps.length - 1) {
      return
    }
    // current visible step
    let element = $(`.step-${steps[stepsIndex]}`)
    element.animate({
      opacity: 0
    }, 500, function () {
      element.css('display', 'none')
      stepsIndex++
      //  make next element visible - elements by default are display: none
      $(`.step-${steps[stepsIndex]}`).css('opacity', '0')
      $(`.step-${steps[stepsIndex]}`).css('display', 'flex')
      $(`.step-${steps[stepsIndex]}`).animate({
        opacity: 1
      }, 500)

    })

  })

  $('.prev').click(function () {
    if (stepsIndex === 0) {
      return;
    }
    let element = $(`.step-${steps[stepsIndex]}`)


    element.animate({
      opacity: 0
    }, 500, function () {
      element.css('display', 'none')
      stepsIndex--
      //  make next element visible - elements by default are display: none
      $(`.step-${steps[stepsIndex]}`).css('opacity', '0')
      $(`.step-${steps[stepsIndex]}`).css('display', 'flex')
      $(`.step-${steps[stepsIndex]}`).animate({
        opacity: 1
      }, 500)

    })
  })

  $('.step-one__vid-1').on('click', function () {
    $('.step-one__video').attr('src', '../img/fast.mp4').css('display', 'block');
    $('.step-one__icon-parent').css('display', 'none');
  })

  $('.step-one__vid-2').on('click', function () {
    $('.step-one__video').attr('src', '../img/slow.mp4').css('display', 'block');
    $('.step-one__icon-parent').css('display', 'none');
  })

  $('.home-btn').on('click', function () {
    console.log('test worked')
  })
  // runLoading()
})

// runs on page load (after begin button is pressed)
// runs loading screen for x seconds
// fades loading screen opacity out, sets it to display none, and makes intro and step elements visible
// function runLoading() {
//   setTimeout(function () {
//     $('.loading').animate({
//       opacity: 0
//     }, 1000, function () {
//       $('.loading').css('display', 'none')
//       $('.steps-intro').css('display', 'flex')
//       $('.step-parent').css('display', 'flex')
//     })
//   }, 60000)
//   // 60000
//   // once intro is finished, it hides it and brings up the first step
//   // first timeout amount + 7000 ms to account for all animation durations - keeps transitions smooth
//   setTimeout(function () {
//     $('.steps-intro').hide()
//     // display first step
//     $('.step-one').css('display', 'flex')
//     // 67000
//   }, 67000)
// }