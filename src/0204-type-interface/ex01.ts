interface empresa {
  nome: string;
  fundacao: number;
  pais: string;
}

interface Produto {
  nome: string;
  preco: number;
  descricao: string;
  garantia: string;
  seguroAcidentes: true,
  empresaFabricante: empresa;
  empresaMontadora: empresa;
}

async function fetchProduct(): Promise<void> {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  const data: Produto = await response.json();
  showProduct(data);
}

function showProduct(data: Produto) {
  document.body.innerHTML = `
  <div>
    <h2>${data.nome}</h2>
    <p>${data.preco}</p>
    <div>
      <h3>Fabricante ${data.empresaFabricante.nome}</h3>
    </div>
    <div>
      <h3>Montadora ${data.empresaMontadora.nome}</h3>
    </div>
  </div>
  `;
}

fetchProduct();
