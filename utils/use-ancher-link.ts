import { useEffect, useState } from "react"
import { getAnchorLink, getAnchorLinkNumber } from "./anchor-link"

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
    setState(getAnchorLinkNumber())

    window.addEventListener("hashchange", () => {
      setState(getAnchorLinkNumber())
    })
  }, [])

  return state
}