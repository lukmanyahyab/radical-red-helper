export function capitalize(string: string): string {
  if (!string.length) return "";
  return string.toLowerCase().replace(/\b\w/g, (word) => word.toUpperCase());
}
