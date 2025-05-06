export function imageURL(path: string): string {
  return `/images/${path}`;
}

export function projectImageURL(path: string): string {
  return imageURL(`projects/${path}`);
}
