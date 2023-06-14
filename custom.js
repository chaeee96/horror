function Popup__isActived(no) {
  return $(`.popup-${no}`).hasClass(`active`);
}

function Popup__toggle(no) {
  if (Popup__isActived(no)) {
    Popup__hide(no);
  } else {
    Popup__show(no);
  }
}

function Popup__show(no) {
  $(`.popup-${no}`).addClass(`active`);
  $(`.showBtn-popup-${no}`).addClass(`active`);
  $(`html`).addClass(`popup-${no}-actived`);
}

function Popup__hide(no) {
  $(`.popup-${no}`).removeClass(`active`);
  $(`.showBtn-popup-${no}`).removeClass(`active`);

  $(`html`).removeClass(`popup-${no}-actived`);
}

function Popup__init(no) {
  $(`.showBtn-popup-${no}`).click(function () {
    Popup__show(no);
  });

  $(`.popup-${no}, .popup-${no} .popup-close-btn`).click(function () {
    Popup__hide(no);
  });

  $(`.popup-${no} .popup-content`).click(function () {
    return false;
  });
}

window.addEventListener("load", () => {
  $(".right-cont--vidio--sum").click(function () {
    $(".right-cont--vidio--sum").css("z-index", "-1");
    $(".right-cont--vidio--playBtn").css("z-index", "-1");
    $(".right-cont--vidio--cont").css("display", "block");
  });

  // 레이어 팝업
  Popup__init(1);
  Popup__init(2);
});
