function setCookie(cname, cvalue, exdays) {
  var expires;
  // if (exdays === 0) {
  //   expires = "";
  // } else {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60);
  expires = "; expires=" + d.toGMTString();
  // }
  document.cookie = cname + "=" + cvalue + expires + "; path=/";
  document.cookie =
    cname + "=" + cvalue + expires + "; domain=.safepad.finance; path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].trim();
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "en",
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    },
    "google_translate_element"
  );
}

//Using jQuery
$(document).ready(function () {
  $(document).on("click", "#lang-change-en", function () {
    setCookie("googtrans", "", 1);
    console.log(getCookie("googtrans"));
    googleTranslateElementInit();
    location.reload();
  });

  $(document).on("click", "#lang-change-cn", function () {
    setCookie("googtrans", "/en/zh-CN", 1);
    console.log(getCookie("googtrans"));
    googleTranslateElementInit();
    location.reload();
  });

  $(document).on("click", "#lang-change-hi", function () {
    setCookie("googtrans", "/en/hi", 1);
    console.log(getCookie("googtrans"));
    googleTranslateElementInit();
    location.reload();
  });

  $(document).on("click", "#lang-change-in", function () {
    setCookie("googtrans", "/en/id", 1);
    console.log(getCookie("googtrans"));
    googleTranslateElementInit();
    location.reload();
  });
});
