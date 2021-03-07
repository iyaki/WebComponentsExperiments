export default class extends HTMLElement {
	connectedCallback () {
		this.innerHTML = `<inner-element></inner-element>`
	}
}
