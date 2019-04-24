import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown, faAngleUp, faArrowDown, faArrowUp, faCaretUp, faCaretDown, faStar, faStarHalf, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
    faAngleDown, faAngleUp,
    faArrowDown, faArrowUp,
    faCaretDown, faCaretUp,
    faStar, faStarHalf,
    faPaperPlane
)

Vue.component('font-awesome-icon', FontAwesomeIcon)