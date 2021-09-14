import { Store } from "./store"
import { replaceAnchorLinkNumber } from "../utils/anchor-link"

export const useAvailableSections = () => {
  const [store, updateStore] = Store.useWithUpdate()

  const isAvailableSction = (n: number): boolean => {
    return store.state.section.includes(n)
  }

  const moveToAvailableSection = (callback: (n: number) => number): void => {
    replaceAnchorLinkNumber(n => {
      const result = callback(n)
      return isAvailableSction(result) ? result : n
    })
  }

  const getNextStepIndex = (): number => {
    if (typeof document === "undefined") { return 0 }

    const sections = Array.from(document.querySelectorAll(".section-container > section"))
    const index = sections.findIndex(v => v.querySelector(".hidden:scope .section-type-step"))
    return 0 <= index ? index : (sections.length - 1)
  }

  const addNextStepToAvailableSections = (): void  => {
    updateStore(() => {
      const start = Math.max(...store.state.section)
      const end = getNextStepIndex()
      for (let i = start; i <= end; i++) {
        store.state.section.push(i)
      }
    })
  }

  return { isAvailableSction, moveToAvailableSection, getNextStepIndex, addNextStepToAvailableSections }
}