export function generateId(): string {
  return Math.floor(Math.random() * 10) + 1 + Date.now().toString(36);
}
