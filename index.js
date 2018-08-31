const elements = {
	url: document.getElementById('url'),
	request: document.getElementById('request'),
	response: document.getElementById('response'),
}

const fetchIt = (url) => {
	return new Promise(function(resolve, reject) {
		fetch(url)
			.then(function(response) {
				return response.json();
			})
			.then(function(json) {
				resolve(JSON.stringify(json, null, '  '))
			}).catch((err) => {
				reject(err)
			})
	})
}

elements.request.onclick = (d) => {
	let urlStr = elements.url.value
	fetchIt(urlStr).then((res) => {
		response.innerHTML = res
	})
}
