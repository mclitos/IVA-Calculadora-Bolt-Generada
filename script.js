function calculate() {
  const total = parseFloat(document.getElementById('total').value);
  const tax = parseFloat(document.getElementById('tax').value);
  
  if (!isNaN(total) && !isNaN(tax) && total >= 0 && tax >= 0) {
    const subtotal = (total / (1 + (tax / 100))).toFixed(2);
    const taxValue = (total - subtotal).toFixed(2);
    document.getElementById('result').textContent = subtotal;
    document.getElementById('tax-value').textContent = taxValue;
  } else {
    document.getElementById('result').textContent = '0.00';
    document.getElementById('tax-value').textContent = '0.00';
  }
}

document.getElementById('total').addEventListener('input', calculate);
document.getElementById('tax').addEventListener('input', calculate);

document.getElementById('copy').addEventListener('click', () => {
  const result = document.getElementById('result').textContent;
  navigator.clipboard.writeText(result)
    .then(() => alert('Valor copiado al portapapeles'))
    .catch(() => alert('Error al copiar el valor'));
});
