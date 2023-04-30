import { select, on, addClass, hasClass, removeClass, selectAll, getAttribute, setStyle } from '../lib/dom'
import { map } from '../lib/utils'

const MEGA_SEARCH_SELECTOR = '.js-mega-search'
const MEGA_SEARCH_TAB_SELECTOR = '.js-mega-search-tab'
const MEGA_SEARCH_TAB_ACTIVE_SELECTOR = 'mega-search__tab-item--active'
const MEGA_SEARCH_CONTENT_SELECTOR = '.js-mega-search-content'
const MEGA_SEARCH_CONTENT_ACTIVE_CLASS = 'mega-search__content--active'

export default () => {
  const el = select(MEGA_SEARCH_SELECTOR)
  if (el) {
    const tabsEl = selectAll(MEGA_SEARCH_TAB_SELECTOR, el)
    const contentsEl = selectAll(MEGA_SEARCH_CONTENT_SELECTOR, el)
    if (tabsEl && contentsEl) {
      addClass(MEGA_SEARCH_TAB_ACTIVE_SELECTOR, tabsEl[0])
      addClass(MEGA_SEARCH_CONTENT_ACTIVE_CLASS, contentsEl[0])
      const parentContentEl = contentsEl[0].parentNode
      if (parentContentEl) {
        setStyle('height', contentsEl[0].clientHeight + 'px', parentContentEl)
      }
      map((tab) => {
        on('click', (e) => {
          e.preventDefault()
          const target = getAttribute('data-tab', tab)
          contentsEl.forEach((item) => {
            removeClass(MEGA_SEARCH_CONTENT_ACTIVE_CLASS, item)
          })
          tabsEl.forEach((item) => {
            removeClass(MEGA_SEARCH_TAB_ACTIVE_SELECTOR, item)
          })
          const tabContent = document.getElementById(target)
          if (target && tabContent) {
            if (!hasClass(MEGA_SEARCH_CONTENT_ACTIVE_CLASS, tabContent) && !hasClass(MEGA_SEARCH_TAB_ACTIVE_SELECTOR, tab)) {
              addClass(MEGA_SEARCH_CONTENT_ACTIVE_CLASS, tabContent)
              addClass(MEGA_SEARCH_TAB_ACTIVE_SELECTOR, tab)
              setStyle('height', tabContent.clientHeight + 'px', tabContent.parentNode)
            }
          }
        }, tab)
      }, tabsEl)
    }
  }
}
