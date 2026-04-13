function knightMoves(start, target) {
  const [tx, ty] = target;
  const queue = [[start, [start]]]
  const visited = new Set([start.toString()]);

  const OFFSETS = [
    [2, 1], [2, -1], [1, 2], [1, -2],
    [-2, 1], [-2, -1], [-1, 2], [-1, -2]
  ];

  while (queue.length > 0) {
    const [[cx, cy], path] = queue.shift();

    if (cx === tx && cy === ty) {
      console.log(`You made it in ${path.length -1} moves! Here's your path:`);
      path.forEach((move) => console.log(move));

      return path;
    }

    for (const [dx, dy] of OFFSETS) {
      const nx = cx + dx;
      const ny = cy + dy;

      if (nx >= 0 && nx < 8 && ny >= 0 && ny < 8 && !visited.has(`${nx},${ny}`)) {
        visited.add(`${nx},${ny}`);
        queue.push([[nx, ny], [...path, [nx, ny]]]);
      }
    }
  }
}

export default knightMoves;