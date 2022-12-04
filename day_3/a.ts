const input = await Deno.readTextFile('./input.txt');
const fixedInput = input.replace(/\r/g, '').split('\n');

const rucksacks = fixedInput.map((rucksack) => [
  rucksack.slice(0, rucksack.length / 2),
  rucksack.slice(rucksack.length / 2),
]);

const findCommonItem = (rucksacks: string[]): string => {
  let commonItem = '';
  [...rucksacks[0]].forEach((item) => {
    if (rucksacks[1].includes(item)) {
      commonItem = item;
    }
  });

  return commonItem;
};

const commonItems = rucksacks.map((rucksack) => findCommonItem(rucksack));

let totalPriorities = 0;

commonItems.forEach((item) => {
  if (item === item.toUpperCase()) {
    totalPriorities += item.charCodeAt(0) - 38;
  } else {
    totalPriorities += item.charCodeAt(0) - 96;
  }
});

console.log(totalPriorities);
