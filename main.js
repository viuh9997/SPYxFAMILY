//https://embed.warezcdn.net/serie/tt13706018

Array.prototype.forEach.call(
	document.querySelectorAll("[type=radio]"),
	function (radio) {
		radio.addEventListener(
			"click",
			function () {
				var self = this;
				Array.prototype.filter
					.call(document.getElementsByName(this.name), function (filterEl) {
						return self !== filterEl;
					})
					.forEach(function (otherEl) {
						delete otherEl.dataset.check;
					});
				if (this.dataset.hasOwnProperty("check")) {
					this.checked = false;
					delete this.dataset.check;
				} else {
					this.dataset.check = "";
				}
			},
			false
		);
	}
);

fetch("https://api.npoint.io/f991be1021f14a094d2a")
	.then((res) => res.json())
	.then((data) => {
		console.log(data);
		//var str = JSON.stringify(data);
		//console.log(str);
		data.forEach((item) => {
			document.querySelector(
				".epContainer"
			).innerHTML += `<iframe src="${item.link}" frameborder="0"></iframe>`;
		});
	})
	.catch((erro) => console.log("Erro:" + erro));
