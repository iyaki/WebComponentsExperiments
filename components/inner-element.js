window.customElements.define('inner-element', class extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<div x-data="{ happinesLevel: 0 }">
			<div x-text="'Yo soy otro web component' + ' :D'.repeat(happinesLevel)"></div>
			<button @click="++happinesLevel">:D</button>
		</div>
		`
	}
})
