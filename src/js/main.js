let DeviceDetection = require("./components/device-detection");
let Togglers = require("./components/togglers");
//let Carousel = require("./components/carousel");
//let Modal = require("./components/modal");
//let Anchor = require("./components/anchor");
//let Input = require("./components/input");
//let Form = require("./components/form");
//let Onepage = require("./components/onepage-scroll");
let Test = require("./components/test");
//let Animation = require("./components/animation");

$(document).ready(function(){
  
  DeviceDetection.run();
  Togglers.init();
  //Carousel.init();
  //Modal.init();
  //Anchor.init();
  //Input.init();
  //Form.init();
  Test.init();
  //Onepage.init();
  //Animation.init();
  
  if ($('.page').hasClass('page--result')) {
    $('.page').find('.result .score').text(getCookie('sum') + ' ');
  }
  
});
function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}


/**
 * Список экспортируемых модулей, чтобы иметь к ним доступ извне
 * @example
 * Main.Form.isFormValid();
 */
module.exports = {
  DeviceDetection,
  Togglers,
  //Carousel,
  //Modal,
  //Anchor,
  //Input,
  //Form,
  Test,
  //Onepage,
  //Animation
};