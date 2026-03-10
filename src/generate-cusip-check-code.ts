export const generateCusipCheckCode = (cusip: string): number => {
  let total = 0;
  for (let i = 0; i < cusip.length; i++) {
    const c = cusip[i];
    let v: number = isNaN(parseInt(c, 10)) ? c.charCodeAt(0) - 'A'.charCodeAt(0) + 10 : +c;
    if (i % 2 === 1) v *= 2;
    total += Math.floor(v / 10) + (v % 10);
  }
  return (10 - (total % 10)) % 10;
};
