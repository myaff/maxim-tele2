/**
 * Тест
 * @module Test
 */

let testForm = $(".js-test-form");
let testCtrl = '.js-test-ctrl';
let testBtn = '.js-test-btn';
let sum = 0;


function isLastSlide() {
  return testForm.find(testCtrl).filter(':last').hasClass('active');
}
function getPage(answer) {
  let sex = testForm.data('test');
  let page = answer + '-' + sex + '.html';
  let pageUrl = window.location.href.split('/').slice(0,-1).join('/');
  pageUrl += '/' + page;
  return pageUrl;
}

function processTest(el, isLastSlide = false) {
  if (el.find('input[type="radio"]:checked').val() === '1') {
    sum += 1;
  }
  if (!isLastSlide) {
    showNext(el);
  } else {
    showResult(sum);
  }
}
function showNext(el) {
  el.removeClass('active').stop().fadeOut(300);
  setTimeout(function() {
    el.next(testCtrl).stop().fadeIn(300).addClass('active');
  }, 300, el);
}

function checkResult(sum) {
  if (sum >= 4 && sum < 6) {
    return 'good';
  } else if (sum >= 6) {
    return 'saint';
  } else {
    return 'bad';
  }
}

function showResult(sum) {
  let answer = checkResult(sum);
  let page = getPage(answer);
  document.cookie = "sum=" + sum;
  setTimeout(function(){
    window.location.href = page;
  }, 300, page);
}

/**
 * Инициализация карусели
 */
function init(){
  
  testForm.find(testCtrl).eq(0).addClass('active');
  $(testCtrl).on('click', '.test-ctrl', function(){
    $(this).closest(testCtrl).find('.test__btn').fadeIn(300);
  });
  $(testBtn).on('click', function(e) {
    e.preventDefault();
    let ctrl = $(this).closest(testCtrl)
    processTest(ctrl, isLastSlide());
  });
}

module.exports = {init};