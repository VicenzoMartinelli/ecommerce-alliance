
$(function () {
  $(document).scroll(function () {
    let $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height() * 5);

    let $btn = $(".floating-cart");
    $btn.toggleClass('scrolled', $(this).scrollTop() > $nav.height() * 5);

    let navItems = $(".nav-link");
    navItems.toggleClass('scrolled', $(this).scrollTop() > $nav.height() * 5);
  });
});
debugger;
$('#btnEntrar').on('click', () => {
  $('#signup-tab').on('click', () => {
    let mLogin = $('.modal-dialog');
    if (!mLogin.hasClass('signup')) {
      mLogin.toggleClass('signup');
    }
  });
  $('#login-tab').on('click', () => {
    let mLogin = $('.modal-dialog');
    if (mLogin.hasClass('signup')) {
      mLogin.removeClass('signup');
    }
  });
});

function save(element) {
  let data = JSON.stringify(document.getElementById('signup'));
  console.log(data);
  let url = URL.createObjectURL(data);
  let link = document.createElement("a");
  let event = new Event("click");
  link.href = url;
  link.download = "<%dados.json%>";
  link.dispatchEvent(event);
  URL.revokeObjectURL(url);
}
function openSearch() {
  let lstClass = document.getElementsByClassName('container-search')[0].classList;
  let cName = 'searching';
  if (lstClass.contains(cName)) {
    lstClass.remove(cName);
  }
  else
    lstClass.add(cName);
}

function onEnter(element) {
  if ((element.value !== undefined && element.value.length >= 0) || $(this).attr('placeholder') !== null) {
    element.parentNode.querySelector("label").classList.add("active");
  }
}

function onExit(element) {
  if ((element.value !== undefined && element.value.length == 0) || $(this).attr('placeholder') === null) {
    element.parentNode.querySelector("label").classList.remove("active");
  }
}

