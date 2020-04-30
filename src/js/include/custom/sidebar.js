/* global $ */
import { disableBodyScroll, clearAllBodyScrollLocks } from '../lib/bodyScrollLock'
import { ready } from '../lib/dom'

const sidebar = () => {
  const slideoutOverlay = $('.js-slideout-overlay')
  const sidebarOverlay = $('.js-sidebar__overlay')
  const sidebar = $('#sidebar')
  const iconSidebar = $('#sidebar-icon')
  const wrapper = $('#wrapper')

  $('.js-slideout-toggle').on('click', function () {
    wrapper.toggleClass('is-slideout-active')
    disableBodyScroll()
  })
  slideoutOverlay.on('click', function () {
    sidebar.removeClass('open')
    wrapper.removeClass('is-slideout-active')
    iconSidebar.removeClass('active')
    clearAllBodyScrollLocks()
  })

  sidebarOverlay.on('click', function () {
    wrapper.removeClass('is-search-active')
  })

  $('.js-search-trigger').on('click', function () {
    wrapper.addClass('is-search-active')
    $('#iptSearchMobie').focus()
  })
}

ready(sidebar())
