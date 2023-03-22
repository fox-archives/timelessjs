const html = (strings, ...values) => {
	let str = "";

	for (let i = 0; i < strings.length; ++i) {
		str += strings[i] + (values[i] === void 0 ? "" : values[i]);
	}

	return str;
};

html`<div>
	<button @onclick="${this.doThing}" id="button">Click Me!</button>
	<p>You pressed the button ${this.buttonClicks} times!</p>
</div>`;
