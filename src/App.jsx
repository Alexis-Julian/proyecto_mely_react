import "./App.css";
import { useState } from "react";
function App() {
	const [useTranslate, setTranslate] = useState();
	/* Corazon */
	const [useTransform, setTransfrom] = useState();
	const [useOpacity, setOpacity] = useState();
	/*  */
	const [useStyle, setStyle] = useState();
	const [useDisplay, setDisplay] = useState();
	const [useChangeString, setChangeString] = useState(true);
	/* Btn_No */
	const [useNewPosition, setNewPosition] = useState([0, 0, 0, 0]);
	const [useAbsolute, setAbsolute] = useState("");

	function RandomNumber() {
		const medidas = [];
		for (let i = 0; i < 4; i++) {
			medidas.push(Math.round(Math.random() * 93));
		}
		return medidas;
	}

	const HandleOnClickHearth = () => {
		let escala = 1;
		// let rotate = 1;
		let maximo = 0;

		setTranslate("translate(50%)");
		setStyle("none");
		setChangeString(!useChangeString);

		function AnimationHearth() {
			if (!maximo) {
				setTransfrom(`scale(${escala}) rotate(45deg)`);
				escala += 2;
			} else {
				setTransfrom(`scale(${escala}) rotate(45deg)`);
				escala -= 2;
			}

			if (escala > 50) {
				maximo = true;
			}

			if (escala > 25 && escala < 30 && maximo == true) {
				setDisplay("none");
			}
			if (escala < 8 && maximo == true) {
				setOpacity(0);

				clearInterval(intervalScale);
			}
		}
		const intervalScale = setInterval(AnimationHearth, 100);
	};

	const HandleOnMouseOver = () => {
		const medidas = RandomNumber();
		setNewPosition(medidas);
		setAbsolute("absolute");
	};

	return (
		<>
			<div className="structure">
				<div className="sorry" id="perdonas" style={{ display: useDisplay }}>
					¿Me perdonas? 😭
				</div>
				<div
					className="yes"
					id="boton_si"
					style={{ transform: useTranslate, opacity: useOpacity }}
				>
					<div
						className="love"
						id="love"
						style={{ transform: useTransform }}
						onClick={() => HandleOnClickHearth()}
					>
						<div className="name_yes">
							<p id="text_love">{useChangeString ? "Si" : "❤"}</p>
						</div>
					</div>
				</div>
				<div
					className="hitbox"
					id="boton"
					style={{
						display: useStyle,
						position: useAbsolute,
						top: useNewPosition[0] + "%",
						bottom: useNewPosition[1] + "%",
						right: useNewPosition[2] + "%",
						left: useNewPosition[3] + "%",
					}}
					onMouseOver={() => HandleOnMouseOver()}
				>
					<button>No 😡</button>
				</div>
			</div>

			<div className={`${useOpacity != 0 && "text"} posicionamiento`} id="text">
				<h1 className="happy">Gracias te amo mi amor ❤</h1>
			</div>
		</>
	);
}

export default App;
