import { disableBodyScroll, clearAllBodyScrollLocks } from '../lib/bodyScrollLock'
import { select, on, addClass, hasClass, removeClass } from '../lib/dom'

const BODY = document.body
const SIDEBAR_SELECTOR = '.js-sidebar'
const SIDEBAR_OVERLAY_SELECTOR = '.js-sidebar-overlay'
const SLIDEOUT_SELECTOR = '.js-slideout'
const SLIDEOUT_OVERLAY_SELECTOR = '.js-slideout-overlay'
const SLIDEOUT_TOGGLE_SELECTOR = '.js-slideout-toggle'
const SLIDEOUT_ACTIVE_CLASS = 'is-slideout-active'
const SEARCH_TRIGGER_SELECTOR = '.js-search-trigger'
const SEARCH_ACTIVE_CLASS = 'is-search-active'

export default () => {
  const el = select(SIDEBAR_SELECTOR)
  if (el) {
    const slideoutEl = select(SLIDEOUT_SELECTOR, el)
    const slideoutToggleEl = select(SLIDEOUT_TOGGLE_SELECTOR, el)
    const slideoutOverlayEl = select(SLIDEOUT_OVERLAY_SELECTOR, el)
    const sidebarOverlayEl = select(SIDEBAR_OVERLAY_SELECTOR, el)
    const searchTriggerEl = select(SEARCH_TRIGGER_SELECTOR, el)
    if (slideoutToggleEl && slideoutEl) {
      on('click', () => {
        if (!hasClass(SLIDEOUT_ACTIVE_CLASS, BODY)) {
          addClass(SLIDEOUT_ACTIVE_CLASS, BODY)
          disableBodyScroll(slideoutEl)
        } else {
          removeClass(SLIDEOUT_ACTIVE_CLASS, BODY)
          clearAllBodyScrollLocks()
        }
      }, slideoutToggleEl)
    }

    if (slideoutOverlayEl) {
      on('click', () => {
        if (!hasClass(SLIDEOUT_ACTIVE_CLASS, BODY)) {
          addClass(SLIDEOUT_ACTIVE_CLASS, BODY)
          disableBodyScroll(slideoutEl)
        } else {
          removeClass(SLIDEOUT_ACTIVE_CLASS, BODY)
          clearAllBodyScrollLocks()
        }
      }, slideoutOverlayEl)
    }

    if (searchTriggerEl) {
      on('click', () => {
        if (!hasClass(SEARCH_ACTIVE_CLASS, BODY)) {
          addClass(SEARCH_ACTIVE_CLASS, BODY)
          disableBodyScroll(BODY)
        } else {
          removeClass(SEARCH_ACTIVE_CLASS, BODY)
          clearAllBodyScrollLocks()
        }
      }, searchTriggerEl)
    }

    if (sidebarOverlayEl) {
      on('click', () => {
        removeClass(SEARCH_ACTIVE_CLASS, BODY)
        clearAllBodyScrollLocks()
      }, sidebarOverlayEl)
    }
  }
}
