export const module = '';

const input = await Deno.readTextFile('./input.txt');

enum Opponent {
  Rock = 'A',
  Paper = 'B',
  Scissors = 'C',
}

enum Me {
  Rock = 'X',
  Paper = 'Y',
  Scissors = 'Z',
  RockValue = 1,
  PaperValue,
  ScissorsValue,
}

const calculateGame = (a: Opponent, b: Me): number => {
  switch (a) {
    case Opponent.Rock:
      if (b === Me.Paper) return 6 + Me.PaperValue;
      if (b === Me.Rock) return 3 + Me.RockValue;
      if (b === Me.Scissors) return Me.ScissorsValue;
      break;

    case Opponent.Paper:
      if (b === Me.Paper) return 3 + Me.PaperValue;
      if (b === Me.Rock) return Me.RockValue;
      if (b === Me.Scissors) return 6 + Me.ScissorsValue;
      break;

    case Opponent.Scissors:
      if (b === Me.Paper) return Me.PaperValue;
      if (b === Me.Rock) return 6 + Me.RockValue;
      if (b === Me.Scissors) return 3 + Me.ScissorsValue;
      break;
    default:
      return 0;
  }
  return 0;
};

const instructions = input.replace(/\r/g, '').replace(/ /g, '').split('\n');

let score = 0;

instructions.forEach(
  (game) => (score += calculateGame(game[0] as Opponent, game[1] as Me))
);

console.log(score);
