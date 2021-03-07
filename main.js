'use strict'

import AppContainer from './components/app-container.js'
window.customElements.define('app-container', AppContainer)

import InnerElement from './components/inner-element.js'
window.customElements.define('inner-element', InnerElement)

document.body.appendChild(document.createElement('app-container'))
