/* Boton no */
const btn_no = document.getElementById("boton");

/* Boton si  */
const structure_si = document.getElementById("boton_si");
const btn_si = document.getElementById("love");
const text_love = document.getElementById("text_love");

/* Perdonas */
const divStructure = document.getElementById("perdonas");

/* Feliz */
const happy = document.getElementById("text");

const bool = false;

function RandomNumber() {
	const medidas = [];
	for (let i = 0; i < 4; i++) {
		medidas.push(Math.round(Math.random() * 93));
	}
	return medidas;
}

btn_si.addEventListener("click", (e) => {
	structure_si.style.transform = "translateX(50%)";

	let escala = 1;
	let rotate = 1;

	btn_no.style.display = "none";
	let maximo = false;

	text_love.innerHTML = "❤";

	// structure_si.style.gridColumn = "1/3";

	btn_si.style.transform = `scale(${escala}) rotate(45deg)`;

	function AnimationHearth() {
		if (!maximo) {
			btn_si.style.transform = `scale(${escala}) rotate(45deg)`;
			escala += 2;
		} else {
			btn_si.style.transform = `scale(${escala}) rotate(45deg)`;
			escala -= 2;
		}

		if (escala > 50) {
			maximo = true;
		}

		if (escala > 25 && escala < 30 && maximo == true) {
			divStructure.style.display = "none";
			// boton.style.display = "none";
		}
		if (escala < 8 && maximo == true) {
			btn_si.style.opacity = 0;
			happy.classList.remove("text");
			clearInterval(intervalScale);
		}
	}

	const intervalScale = setInterval(AnimationHearth, 100);

	// const intervalOpacity = setInterval(OpacityHearth, 30);
});
