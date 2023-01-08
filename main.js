//https://embed.warezcdn.net/serie/tt13706018

fetch("https://api.npoint.io/f991be1021f14a094d2a")
	.then((res) => res.json())
	.then((data) => {
		//console.log(data);
		//var str = JSON.stringify(data);
		//console.log(str);
		data.forEach((item) => {
			document.querySelector(
				".epContainer"
			).innerHTML += `<iframe src="${item.link}" frameborder="0"></iframe>`;
		});
	})
	.catch((erro) => console.log("Erro:" + erro));
