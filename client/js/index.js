let campos = [
  document.querySelector('#data'),
  document.querySelector('#quantidade'),
  document.querySelector('#valor')
];


document.querySelector('.form').addEventListener('submit', function (event) {
  let tbody = document.querySelector('table tbody');
  let tr = document.createElement('tr');
  event.preventDefault();
  campos.forEach(function (campo) {

    let td = document.createElement('td');
    td.textContent = campo.value;
    if (campo.type == "date") {
      td.textContent = convertData(campo.value);
    }

    if (campo.id == "valor") {
      td.textContent = convertValor(campo.value)
    }
    tr.appendChild(td);
  });

  let tdVolume = document.createElement('td');
  tdVolume.textContent = campos[1].value * campos[2].value;
  tr.appendChild(tdVolume);
  tbody.appendChild(tr);
  resetForm();
  campos[0].focus();

});

function convertData(data) {
  let split = data.split('-');
  let nData = `${split[2]}/${split[1]}/${split[0]}`
  return nData;

}

function convertValor(valor) {
  let vl = parseFloat(valor).toFixed(2).replace('.', ',') + "";
  let nValor = `R$ ${vl}`;
  return nValor;
}

function resetForm() {
  document.querySelector('#data').value = "";
  document.querySelector('#quantidade').value = 1;
  document.querySelector('#valor').value = 0;
}











