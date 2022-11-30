# Annotation e Inference

## Exercício 1

Conserte a função com TypeScript

```javascript
function normalizarTexto(texto) {
  return texto.trims().toLowercase();
}
```

## Exercício 2

Conserte as funções com TypeScript

```javascript
const input = document.querySelector('input');

const total = localStorage.getItem('total');
input.value = total;
calcularGanho(input.value);

function calcularGanho(value) {
  const p = document.querySelector('p');
  p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
}

function totalMudou() {
  const value = Number(input.value);
  localStorage.setItem('total', value);
  calcularGanho(value);
}

input.addEventListener('keyup', totalMudou);

```

```HTML
<h1>Bônus de 100 - 20% do total:</h1>
<label>Total</label>
<input type="number" />
<p></p>
```
