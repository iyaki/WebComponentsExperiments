import './inner-element.js'
import './another-element.js'

window.customElements.define('app-container', class extends HTMLElement {
	showAnotherElement = false

	connectedCallback() {
		this.innerHTML = `
		<button name="another-element">Add another element</button>
		<inner-element></inner-element>
		`

		this
			.querySelector('button[name="another-element"]')
			.addEventListener('click', this.toggleAnotherElement.bind(this))
	}

	toggleAnotherElement() {
		this.showAnotherElement = !this.showAnotherElement

		const button = this.querySelector('button[name="another-element"]')
		if (this.showAnotherElement) {
			button.innerText = 'Remove another element'

			this.appendChild(document.createElement('another-element'))
		} else {
			button.innerText = 'Add another element'

			this.querySelector('another-element').remove()
		}
	}
})
