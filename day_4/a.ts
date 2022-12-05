const input = await Deno.readTextFile('./input.txt');
const fixedInput = input.replace(/\r/g, '').split('\n');
const assignments: number[][][] = [];
let total = 0;

const elfPairs = fixedInput.map((pair) => {
  return pair.split(',');
});

const populateArray = (start: number, end: number) => {
  return Array.from(
    Array.from(Array(Math.ceil(end - start + 1)).keys()),
    (x) => start + x
  );
};

const _findDomain = (elf: string) => {
  const elfSections = elf.split('-');
  return elfSections;
};

elfPairs.forEach((elfPair) => {
  const tasks: number[][] = [];
  elfPair.forEach((elf) => {
    const elfSections = elf.split('-').map((e) => parseInt(e));
    const assignments = populateArray(elfSections[0], elfSections[1]);
    tasks.push(assignments);
  });
  assignments.push(tasks);
});

assignments.forEach((assignment) => {
  const firstContains = assignment[0].every((element) => {
    return assignment[1].includes(element);
  });

  const secondContains = assignment[1].every((element) => {
    return assignment[0].includes(element);
  });

  if (firstContains || secondContains) {
    total += 1;
  }
});

console.log(total);
