/* 
 You will be given a 
 list of stock prices for 
 a given day and your goal 
 is to return the maximum profit 
 that could have been made by 
 buying a stock at the given price and 
 then selling the stock later on. 
 For example if the input is: [45, 24, 35, 31, 40, 38, 11] 
 then your program should return 16 because if you bought the
 stock at $24 and sold it at $40, a profit of 
 $16 was made and this is the largest profit that could be made. 
 If no profit could have been made, return -1.
*/
function maxStockProfit(pricesArr) {
  let maxProfit = -1;
  let buyPrice = 0;
  let sellPrice = 0;

  let changeBuyPrice = true;
  for (let i = 0; i < pricesArr.length; i++) {
    if (changeBuyPrice) {
      buyPrice = pricesArr[i];
    }
    sellPrice = pricesArr[i + 1];
    if (sellPrice < buyPrice) {
      changeBuyPrice = true;
    } else {
      let tempProfit = sellPrice - buyPrice;
      if (tempProfit > maxProfit) {
        maxProfit = tempProfit;
      }
      changeBuyPrice = false;
    }
  }
  return maxProfit;
}

//testing

console.log(
  maxStockProfit([32, 46, 26, 38, 40, 48, 42]), //22
  maxStockProfit([10, 18, 4, 5, 9, 6, 16, 12]) //12
);
