export const module = '';

const input = await Deno.readTextFile('./input.txt');

enum Opponent {
  Rock = 'A',
  Paper = 'B',
  Scissors = 'C',
}

enum Me {
  Lose = 'X',
  Draw = 'Y',
  Win = 'Z',
  RockValue = 1,
  PaperValue,
  ScissorsValue,
}

const calculateGame = (a: Opponent, b: Me): number => {
  switch (a) {
    case Opponent.Rock:
      if (b === Me.Win) return 6 + Me.PaperValue;
      if (b === Me.Lose) return Me.ScissorsValue;
      if (b === Me.Draw) return 3 + Me.RockValue;
      break;

    case Opponent.Paper:
      if (b === Me.Win) return 6 + Me.ScissorsValue;
      if (b === Me.Lose) return Me.RockValue;
      if (b === Me.Draw) return 3 + Me.PaperValue;
      break;

    case Opponent.Scissors:
      if (b === Me.Win) return 6 + Me.RockValue;
      if (b === Me.Lose) return Me.PaperValue;
      if (b === Me.Draw) return 3 + Me.ScissorsValue;
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
