//   2 - 0
//  / \
// 1 - 3

// Edege List
// Representa las conexiones que existen en el grafo
const graph = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3],
];

// Adjacent List
// Representa las conexiones para cada indice del array.
const graph = [[2], [2, 3], [0, 1, 3], [1, 2]];

const graph = {
  0: [2],
  1: [2, 3],
  2: [0, 1, 3],
  3: [1, 2],
};

// Adjacent Matrix
// Esta es la forma de representar grafos ponderados
const graph = [
  [0, 0, 1, 0],
  [0, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 0],
];

const graph = {
  0: [0, 0, 1, 0],
  1: [0, 0, 1, 1],
  2: [1, 1, 0, 1],
  3: [0, 1, 1, 0],
};
