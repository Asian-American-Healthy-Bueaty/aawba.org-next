export type Localized<T> = T & { zh?: Partial<T> }

export function localize<T extends { zh?: Partial<T> }>(item: T, language: string): T {
  if (item && language === 'zh' && item.zh) {
    return { ...item, ...item.zh }
  }
  return item
}
