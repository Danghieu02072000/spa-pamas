import { pipe } from '../lib/utils'
import { ready } from '../lib/dom'

import carousel from './carousel'
import sidebar from './sidebar'
import menuMobile from './menu-mobile'
import accordion from './accordion'
import search from './search'
import megaSearch from './mega-search'
import custom from './custom'

ready(pipe(
  custom,
  menuMobile,
  sidebar,
  carousel,
  accordion,
  search,
  megaSearch
))
