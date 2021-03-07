'use strict'

customElements.define(
	'app-container',
	class extends HTMLElement {
		connectedCallback () {
			this.innerHTML = 'Soy un web componenet'
		}
	}
)
