export default class extends HTMLElement {
	connectedCallback () {
		this.innerHTML = `
		<div>Yo soy otro web component</div>
		<button name="happines">:D</button>
		`
		this
			.querySelector('button[name="happines"]')
			.addEventListener('click', () => { this.querySelector('div').innerText += ' :D' })
	}
}
