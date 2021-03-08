import './inner-element.js'
import './another-element.js'

window.customElements.define('app-container', class extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<div x-data="{ showAnotherElement: false }">

			<button x-show="!showAnotherElement" @click="showAnotherElement = true">Add another element</button>
			<button x-show="showAnotherElement" @click="showAnotherElement = false">Remove another element</button>
			<inner-element></inner-element>
			<template x-if="showAnotherElement">
				<another-element x-show="showAnotherElement"></another-element>
			</template>
		</div>
		`

	}
})
