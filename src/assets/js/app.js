const bar = document.querySelector(".loading__bar--inner")
const counter_number = document.querySelector(".loading__counter--number")
let c = 0

let barInterval = setInterval(() => {
	bar.style.width = c + "%"
	counter_number.innerText = c + "%"
	c++
	if (c === 101) {
		clearInterval(barInterval)
	}
}, 20)
