function concat(...args) {
  return (newArr = args.flat());
}
//Test
console.log(concat([1, 2, 3], [4, 5], [6, 7]));
