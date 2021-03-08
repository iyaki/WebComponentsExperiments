import './inner-element.js'
import './another-element.js'

window.customElements.define('app-container', class extends HTMLElement {
	constructor() {
		super()
		this.showAnotherElement = false;
	}

	connectedCallback () {
		let buttonText = 'Show another element'
		if (this.showAnotherElement) {
			buttonText = 'Hide another element'
		}

		this.innerHTML = `
		<button name="another-element">${buttonText}</button>
		<inner-element></inner-element>
		`

		if (this.showAnotherElement) {
			this.innerHTML += `<another-element></another-element>`
		}

		this
			.querySelector('button[name="another-element"]')
			.addEventListener('click', () => {
				this.showAnotherElement = !this.showAnotherElement
				this.connectedCallback()
			})
	}
})
