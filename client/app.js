const app = new Vue({
	el: "#app",
	data: {
		url: "",
		slug: "",
		short: "",
	},
	methods: {
		async create() {
			// console.log(`${this.url}, ${this.slug || undefined}`);
			const response = await fetch("/to/", {
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify({
					url: !this.url.startsWith("https://")
						? `https://${this.url}`
						: this.url,
					slug: this.slug || undefined,
				}),
			});
			if (response.ok) {
				this.short = await response.json();
			}
			this.url = "";
			this.slug = "";
		},
	},
});
