import Dinero from 'dinero.js';

function printPrice(price) {
  const p = Dinero({ amount: price });
  if (p.hasSubUnits()) {
    return p.toFormat('$0,0.00');
  }
  return Dinero({ amount: price }).toFormat('$0,0');
}

export { printPrice };
