const PICKUP_LINE =
  'Are you a kernel panic? Because my whole system stops every time I see you.';

function renderLine(shout: boolean): string {
  return shout ? PICKUP_LINE.toUpperCase() : PICKUP_LINE;
}

function hasFlag(flag: string): boolean {
  return process.argv.slice(2).includes(flag);
}

function showHelp(): void {
  process.stderr.write('Usage: node main.ts [--shout] [--help]\n');
  process.exit(0);
}

function main(): void {
  if (hasFlag('--help')) {
    showHelp();
  }

  console.log(renderLine(hasFlag('--shout')));
}

main();
