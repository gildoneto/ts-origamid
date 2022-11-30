/*
Conserte a função com TypeScript

function normalizarTexto(texto) {
  return texto.trims().toLowercase();
}
*/

function normalizarTexto(texto: string): string {
  return texto.trim().toLowerCase();
}