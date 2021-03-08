import './inner-element.js'

window.customElements.define('another-element', class extends HTMLElement {
	connectedCallback () {
		this.innerHTML = `<inner-element></inner-element>`
	}
})
