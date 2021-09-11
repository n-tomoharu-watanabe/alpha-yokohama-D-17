
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
  replaceAnchorLink(v => v.replace(/\d+$/, _v => String(update(Number(_v)))))
}