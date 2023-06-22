import { select, on, addClass, hasClass, removeClass } from '../lib/dom'

const LANG_SELECTOR = '.js-langguage'
const LANG_TOOGLE_SELECTOR = '.js-language-toogle'
const LANG_DROPDOWN_SELECTOR = '.js-langguage-dropdown'
const LANG_DROPDOWN_ACTIVE_CLASS = 'navigation__langguage-dropdown--active'

export default () => {
  const el = select(LANG_SELECTOR)
  if (el) {
    const toggleEl = select(LANG_TOOGLE_SELECTOR, el)
    const dropdownEl = select(LANG_DROPDOWN_SELECTOR, el)
    if (toggleEl && dropdownEl) {
      on('click', () => {
        if (!hasClass(LANG_DROPDOWN_ACTIVE_CLASS, dropdownEl)) {
          addClass(LANG_DROPDOWN_ACTIVE_CLASS, dropdownEl)
        } else {
          removeClass(LANG_DROPDOWN_ACTIVE_CLASS, dropdownEl)
        }
      }, toggleEl)
    }
    on('click', (e) => {
      if (!el.contains(e.target)) {
        removeClass(LANG_DROPDOWN_ACTIVE_CLASS, dropdownEl)
      }
    }, window)
  }
  var scoll_fix =document.querySelector('#header-main')
  window.addEventListener('scroll', () => {
    if(window.scrollY > 250){
      scoll_fix.classList.add("fixed");
    }
    else{
      scoll_fix.classList.remove("fixed");
    }
})
}
