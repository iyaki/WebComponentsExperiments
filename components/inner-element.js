window.customElements.define('inner-element', class extends HTMLElement {
	constructor() {
		super()
		this.happines = ''
	}

	connectedCallback () {
		this.innerHTML = `
		<div>Yo soy otro web component${this.happines}</div>
		<button name="happines">:D</button>
		`

		this
			.querySelector('button[name="happines"]')
			.addEventListener(
				'click',
				() => {
					this.happines += ' :D'
					this.connectedCallback()
				}
			)
	}
})
