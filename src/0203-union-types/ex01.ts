const toNumber = (value: number | string): number => {
  if (typeof value == 'number') {
    return Number(value);
  } else if (typeof value == 'string') {
    return Number(value);
  } else {
    throw new Error('value deve ser um número ou uma string');
  }
}

console.log(toNumber('25'));