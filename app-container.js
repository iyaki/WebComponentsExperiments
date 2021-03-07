'use strict'

import './inner-element.js'

customElements.define(
	'app-container',
	class extends HTMLElement {
		connectedCallback () {
			this.innerHTML = `<inner-element></inner-element>`
		}
	}
)
