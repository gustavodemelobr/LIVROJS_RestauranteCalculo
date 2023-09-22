const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    const kg = Number(frm.inKg.value);
    const consumo = Number(frm.inConsumo.value);

    const valor = (kg * consumo) / 1000;
    resp.innerText = `Valor a pagar R$: ${valor.toFixed(2)}`;

    e.preventDefault();
})