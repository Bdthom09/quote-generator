export function getRandomIndex(arr, exclude) {
  let idx;
  do {
    idx = Math.floor(Math.random() * arr.length);
  } while (idx === exclude);
  return idx;
}
