const input = await Deno.readTextFile('./input.txt');
const fixedInput = input.replace(/\r/g, '').split('\n');

const groups: string[][] = [];

for (let i = 0; i < fixedInput.length; i += 3) {
  groups.push([fixedInput[i], fixedInput[i + 1], fixedInput[i + 2]]);
}

const findCommonItem = (group: string[]): string => {
  let commonItem = '';
  [...group[0]].forEach((item) => {
    if (group[1].includes(item) && group[2].includes(item)) {
      commonItem = item;
    }
  });

  return commonItem;
};

const commonItems = groups.map((group) => findCommonItem(group));

let totalPriorities = 0;

commonItems.forEach((item) => {
  if (item === item.toUpperCase()) {
    totalPriorities += item.charCodeAt(0) - 38;
  } else {
    totalPriorities += item.charCodeAt(0) - 96;
  }
});

console.log(totalPriorities);
