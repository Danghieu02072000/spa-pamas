// ---------- Detect Device
var isTouchDevice = 'ontouchstart' in window || 'onmsgesturechange' in window
var isDesktop = $(window).width() !== 0 && !isTouchDevice
var isiPad = navigator.userAgent.indexOf('iPad') !== -1
var isiPhone = navigator.userAgent.indexOf('iPhone') !== -1

function mMenu () {
  const $menu = $('#mainMenu').clone()
  $menu.attr('id', 'my-mobile-menu')
  $menu.mmenu({})
}

$(document).ready(function () {
  const overlay = $('.sidebar-overlay')
  const sidebar = $('#sidebar')
  const wrapper = $('#wrapper')
  const iconSidebar = $('#sidebar-icon')

  $('#sidebar-toggle').on('click', function () {
    iconSidebar.toggleClass('active')
    sidebar.toggleClass('open')
    wrapper.toggleClass('open-sidebar')
    overlay.toggleClass('active')
  })
  overlay.on('click', function () {
    $(this).removeClass('active')
    sidebar.removeClass('open')
    wrapper.removeClass('open-sidebar')
    iconSidebar.removeClass('active')
  })

  if ($('.nav-mobie').length) {
    $('.nav-mobie li.has-sub>.a-open-down').on('click', function () {
      $(this).removeAttr('href')
      var element = $(this).parent('li')
      if (element.hasClass('open')) {
        element.removeClass('open')
        element.find('li').removeClass('open')
        element.find('ul').slideUp()
      } else {
        element.addClass('open')
        element.children('ul').slideDown()
        element
          .siblings('li')
          .children('ul')
          .slideUp()
        element.siblings('li').removeClass('open')
        element
          .siblings('li')
          .find('li')
          .removeClass('open')
        element
          .siblings('li')
          .find('ul')
          .slideUp()
      }
    })
  }
})

// ----------- Check Device customs
$(document).ready(function () {
  if (!isTouchDevice) {
  }
  if (isDesktop) {
    console.log(3)
  }
  if (isiPhone) {
  }
  if (isiPad) {
  }
})

$('img.lazyImg').lazyload({
  effect: 'fadeIn'
})

function searchMobie () {
  const overlayPage = $('#overlay')
  $(document).ready(function () {
    $('.button-call-search').on('click', function () {
      $(this).addClass('active')
      $('.boxMobieSearch').addClass('open')
      overlayPage.fadeIn()
      $('#iptSearchMobie').blur(function () {
        $('#iptSearchMobie').focus()
      })
    })
    $('.cogLangguage').on('click', function () {
      $('.cogLangguage')
        .addClass('active')
        .find('.head-lang')
        .addClass('open')
      overlayPage.fadeIn()
    })
    overlayPage.on('click', function () {
      $('.button-call-search').removeClass('active')
      $('.boxMobieSearch').removeClass('open')
      $('.cogLangguage')
        .removeClass('active')
        .find('.head-lang')
        .removeClass('open')
      overlayPage.fadeOut()
    })
  })
}

// Load inline mobie - tablet
const Xwidth = $(window).width()
if (Xwidth < 800) {
  if (($('.js-mmenu').length === 1)) {
    mMenu()
  }
  searchMobie()
}

// Load components
function component () {

}

function afterLoad () {
  $('#loading-wrap').fadeOut(500)
}

function ResizeWindows () {
  let Yheight = $(window).height()
  let Xwidth = $(window).width()

  if (Xwidth < 800) {
    $(document).ready(function () {})
  }

  if (Xwidth > 800) {
  }
}

$(function cusScrollTop () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
      $('#scrollTop').fadeIn(200)
    } else {
      $('#scrollTop').fadeOut(200)
    }
  })
  $('#scrollTop').click(function (e) {
    e.preventDefault()
    $('html, body').animate(
      {
        scrollTop: 0
      },
      300
    )
  })
})

window.onorientationchange = ResizeWindows
$(window).resize(function () {
  ResizeWindows()
})
ResizeWindows()

function Done () {
  ResizeWindows(),
  component()
}

$(document).ready(function () {
  Done()
})
