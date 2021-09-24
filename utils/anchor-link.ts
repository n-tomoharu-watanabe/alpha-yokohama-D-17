
export const getAnchorLink = (): string => {
  return window?.location.hash ?? ""
}

export const getAnchorLinkNumber = (): number => {
  return Number(getAnchorLink().match(/\d+$/gm) ?? 0)
}

export const setAnchorLink = (value: string) => {
  if (window) { window.location.hash = value }
}

export const replaceAnchorLink = (update: (value: string) => string) => {
  const oldAnchor = getAnchorLink()
  const newAnchor = update(oldAnchor)

  if (oldAnchor !== newAnchor) {
    setAnchorLink(newAnchor)
  }
}

export const replaceAnchorLinkNumber = (update: (value: number) => number) => {
  replaceAnchorLink(v => v.replace(/\d+$/, _v => String(update(Number(_v)))))
}