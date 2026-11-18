// Helpers to build a table's `asAbove` index from rows fetched on the server.
export function index<T extends { id: string }>(rows: T[]): Record<string, T> {
  return Object.fromEntries(rows.map(row => [row.id, row]))
}

export function single<T extends { id: string }>(row: T): Record<string, T> {
  return { [row.id]: row }
}
