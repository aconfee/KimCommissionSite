const PRICE_MATRIX = {
  base: 50,
  framing: [
    [0, 10, 20],
    [0, 20, 40],
    [0, 30, 60],
    [0, 50, 100]
  ],
  levelOfDetail: [
    [0, 30, 100, 300],
    [0, 50, 200, 400],
    [0, 70, 400, 600]
  ],
  background: [0, 20, 30],
  numberOfCharacters: [],
  asIsDiscount: 0.7 // 30% off.
};

export default PRICE_MATRIX;
