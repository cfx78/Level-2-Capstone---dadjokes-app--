let btn = document.getElementById('jokeBtn');
let joke = document.getElementById('newJoke');

function getJoke() {
	let myHeaders = new Headers();
	myHeaders.append('Accept', 'application/json');

	let requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow',
	};

	fetch('https://icanhazdadjoke.com/', requestOptions)
		.then((response) => response.json())
		.then((result) => {
			joke.innerHTML = result.joke;
		})
		.catch((error) => console.log('error', error));
}

btn.addEventListener('click', getJoke);

$(function () {
	var BV = new $.BigVideo();
	BV.init();
	BV.show('https://www.youtube.com/watch?v=NZD3q-o2CBA');
});
