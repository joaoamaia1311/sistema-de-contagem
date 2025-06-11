function contar() {
	let inicio = document.querySelector("#inputinicio").value;
	let fim = document.querySelector("#inputfim").value;
	let passo = document.querySelector("#inputpasso").value;

	inicio = Number(inicio);
	fim = Number(fim);
	passo = Number(passo);

	/* Verificadores de dados */
	if (inicio === 0 || fim === 0) {
		window.alert("Impossível contar com valores nulos!");
		return;
	} else if (passo <= 0) {
		passo = 1;
	} else {
		let resultado = [];
		if (inicio > fim) {
			// Contagem regressiva
			for (let contagem = inicio; contagem >= fim; contagem -= passo) {
				resultado.push(contagem);
			}
		} else if (inicio < fim) {
			for (let contagem = inicio; contagem <= fim; contagem += passo) {
				resultado.push(contagem);
			}
		}
	}
	document.querySelector(".resultado").innerHTML =
		resultado.join("👉") + "🏁";
}
