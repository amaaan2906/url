const app = new Vue({
	el: "#app",
	data: {
		url: "",
		slug: "",
		created: "",
		error: "",
		form: true,
	},
	methods: {
		reset() {
			this.form = true;
			this.url = "";
			this.slug = "";
			this.created = null;
		},
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
				const res = await response.json();
				this.created = `${window.location.protocol}//${window.location.host}/to/${res.slug}`;
				this.error = "";
				this.form = false;
			} else if (response.status === 429) {
				this.error =
					"You are sending too many requests. Try again in 30 seconds.";
				this.created = null;
			} else {
				const res = await response.json();
				this.error = res.msg;
				this.created = null;
			}
		},
	},
});
