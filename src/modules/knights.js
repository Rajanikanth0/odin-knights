function knightMoves(current, target) {
  const [tx, ty] = target;

  const queue = [current];
  const tempArr = [];
  let count = 0;

  while (queue.length) {
    const [x, y] = queue.shift();
    
    if (
      x < 0 || y < 0
      || x > 7 || y > 7
      || tempArr.some(([a, b]) => a == x && b == y)
    ) continue;

    console.log(tempArr);
    tempArr.push([x, y]);

    if (x == tx && y == ty) {
      console.log("target: ", [x, y]);
      return;
    }

    queue.push(
      [x + 2, y + 1],
      [x + 2, y - 1],
      [x + 1, y + 2],
      [x + 1, y - 2],

      [x - 2, y + 1],
      [x - 2, y - 1],
      [x - 1, y + 2],
      [x - 1, y - 2]
    );
  }
}

export default knightMoves;