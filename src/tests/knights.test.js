import knightMoves from "../modules/knights";

describe("", () => {
  test.only("testing the function", () => {
    knightMoves([3, 3], [7, 7]);
  });
  test("invalid position", () => {
    
  })
  test("reaches target in one step", () => {
    expect(knightMoves([3, 3], [2, 5])).toEqual([
      [3, 3],
      [2, 5]
    ]);
  });
  test("reaches target in two steps", () => {
    expect(knightMoves([3, 3], [7, 5])).toEqual([
      [3, 3],
      [5, 4],
      [7, 5]
    ]);
  });
});