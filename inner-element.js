'use strict'

customElements.define(
	'inner-element',
	class extends HTMLElement {
		connectedCallback () {
			this.innerHTML = `Yo soy otro web component`
		}
	}
)
