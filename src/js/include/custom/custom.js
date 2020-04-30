/* global $ */
// ---------- Detect Device
var isTouchDevice = 'ontouchstart' in window || 'onmsgesturechange' in window
var isDesktop = $(window).width() !== 0 && !isTouchDevice
var isiPad = navigator.userAgent.indexOf('iPad') !== -1
var isiPhone = navigator.userAgent.indexOf('iPhone') !== -1

const wrapper = $('#wrapper')

function mMenu () {
  const $menu = $('#mainMenu').clone()
  $menu.attr('id', 'my-mobile-menu')
  $menu.mmenu({})
}

$(document).ready(function () {
  const slideoutOverlay = $('.js-slideout-overlay')
  const sidebarOverlay = $('.js-sidebar__overlay')
  const sidebar = $('#sidebar')
  const iconSidebar = $('#sidebar-icon')

  $('.js-slideout-toggle').on('click', function () {
    wrapper.toggleClass('is-slideout-active')
  })
  slideoutOverlay.on('click', function () {
    sidebar.removeClass('open')
    wrapper.removeClass('is-slideout-active')
    iconSidebar.removeClass('active')
  })

  sidebarOverlay.on('click', function () {
    wrapper.removeClass('is-search-active')
  })

  if ($('.js-menu-mobile').length > 0) {
    const MENU_ITEM_SELECTOR = '.menu__item'
    const MENU_DROPDOWN_SELECTOR = '.menu__dropdown'
    const MENU_SUB_OPEN_CLASS = 'menu__item--open'

    $('.js-menu-mobile .menu__item--sub .menu__toggle').on('click', function () {
      var element = $(this).closest(MENU_ITEM_SELECTOR)
      if (element.hasClass(MENU_SUB_OPEN_CLASS)) {
        element.removeClass(MENU_SUB_OPEN_CLASS)
        element.find(MENU_ITEM_SELECTOR).removeClass(MENU_SUB_OPEN_CLASS)
      } else {
        element.addClass(MENU_SUB_OPEN_CLASS)
        element.siblings(MENU_ITEM_SELECTOR).children(MENU_DROPDOWN_SELECTOR)
        element.siblings(MENU_ITEM_SELECTOR).removeClass(MENU_SUB_OPEN_CLASS)
        element.siblings(MENU_ITEM_SELECTOR).find(MENU_ITEM_SELECTOR).removeClass(MENU_SUB_OPEN_CLASS)
      }
    })
  }
})

// ----------- Check Device customs
$(document).ready(function () {
  if (!isTouchDevice) {
  }
  if (isDesktop) {
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
  $(document).ready(function () {
    $('.js-search-trigger').on('click', function () {
      wrapper.addClass('is-search-active')
      $('#iptSearchMobie').focus()
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

/* eslint-disable */
function afterLoad () {
  $('#loading-wrap').fadeOut(500)
}
/* eslint-enable */

function ResizeWindows () {
  const Xwidth = $(window).width()

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

$(document).ready(function () {
  ResizeWindows()
})
