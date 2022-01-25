"use strict";

const add_Zeros = n => {
	if (n.toString().length < 2) return "0".concat(n);
	return n ;
}

const update_Time = () => {
	
	const time = new Date();

	let hours = add_Zeros(time.getHours());
	let minutes = add_Zeros(time.getMinutes());
	let seconds = add_Zeros(time.getSeconds());

	document.querySelector(".hour").textContent = hours;
	document.querySelector(".min").textContent = minutes;
	document.querySelector(".sec").textContent = seconds;

}

update_Time();

setInterval(update_Time, 1000);

