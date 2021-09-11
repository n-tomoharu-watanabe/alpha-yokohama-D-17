
export const getAnchorLink = (): string => {
  return window?.location.hash ?? ""
}

export const setAnchorLink = (value: string) => {
  if (window) { window.location.hash = value }
}

export const replaceAnchorLink = (update: (value: string) => string) => {
  setAnchorLink(update(getAnchorLink()))
}

export const replaceAnchorLinkNumber = (update: (value: number) => number) => {
  replaceAnchorLink(v => `section${update(Number(v.match(/\d+/)?.[0] ?? 0))}`)
}