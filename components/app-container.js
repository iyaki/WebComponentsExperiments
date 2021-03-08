import './inner-element.js'

window.customElements.define('app-container', class extends HTMLElement {
	connectedCallback () {
		this.innerHTML = `<inner-element></inner-element>`
	}
})
