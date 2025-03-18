import './style.scss'

import header from './js/header.js'
import basic from './js/basic.js'
import modalRules from './js/modal_rules.js'
import difficulty from './js/difficulty/difficulty.js'
import switcher from './js/switch.js'

function app() {
  const app = document.querySelector('#app')
  app.appendChild(header());
  app.appendChild(basic());
  app.appendChild(modalRules());
  app.appendChild(difficulty());
  switcher();

}
app();



