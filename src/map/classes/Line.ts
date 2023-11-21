export class Line {
  constructor(public name: string, public colour: string) {}
}

type GradientPoint = [colour: string, location: number];

export function getLinearGradient(lines: Line[]): string {
  const midpointCount = lines.length - 2;
  const gap = 100 / lines.length - 1;

  const midpoints: GradientPoint[] = [];

  for (let i = 1; i < midpointCount - 1; i++) {
    midpoints.push([lines[i].colour, i * gap]);
  }

  const points: GradientPoint[] = [
    [lines[0].colour, 0],
    ...midpoints,
    [lines[lines.length - 1].colour, 100],
  ];

  return `linear-gradient(
    90deg,
    ${points.map(([colour, location]) => `${colour} ${location}%`).join(", ")}
  )`;
}
