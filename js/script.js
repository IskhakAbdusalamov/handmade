document.getElementById('btnProduct').onclick = function () {
	calcCost();
};

function calcCost() {
	var selectProduct = document.getElementById('selectProduct').value;
	var quantityProduct = document.getElementById('quantityProduct').value;
	var total = selectProduct * quantityProduct;
	document.getElementById('priceProduct').innerHTML = total;
	document.getElementById('infoProduct').style.display = 'block';

	if (selectProduct == 0 || quantityProduct == 0 ) {
		document.getElementById('infoProduct').style.display = 'none';
		alert('Укажите значения')
		return;
	}
}
