const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const priceObjects = prices.map((prices) => {
  return { prices, salePrice: prices / 2 };
});
console.log('Price objects:', priceObjects);

const formattedPrices = prices.map((prices) => {
  return `$${prices}`;
});
console.log('Formatted prices:', formattedPrices);
