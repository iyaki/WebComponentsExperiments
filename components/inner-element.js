export default class extends HTMLElement {
	connectedCallback () {
		this.innerHTML = `Yo soy otro web component`
	}
}
