export const x = '';

const input = await Deno.readTextFile('./input.txt');

const elves = input
  .split('\r\n\r\n')
  .map((elve: string) => elve.replace(/\n/g, '').replace(/\r/g, '+'));

const totalCalories = elves.map((elve) => eval(elve));
totalCalories.sort((a, b) => a - b);

console.log(totalCalories.pop());
