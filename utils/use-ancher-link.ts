import { useEffect, useState } from "react"
import { getAnchorLink } from "./anchor-link"

export const useAnchorLink = () => {
  const [state, setState] = useState<string>("")

  useEffect(() => {
    setState(getAnchorLink())

    window.addEventListener("hashchange", () => {
      setState(getAnchorLink())
    })
  }, [])

  return state
}

export const useAnchorLinkNumber = () => {
  const [state, setState] = useState<number>(0)

  useEffect(() => {
    setState(Number(getAnchorLink().match(/\d+$/gm) ?? 0))

    window.addEventListener("hashchange", () => {
      setState(Number(getAnchorLink().match(/\d+$/gm) ?? 0))
    })
  }, [])

  return state
}