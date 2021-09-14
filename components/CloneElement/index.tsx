import React from "react"

type CloneElementProps<P> = {
  element: React.FunctionComponentElement<P>
  children?: React.ReactNode
  props: Partial<P> & React.Attributes
}

export function CloneElement<P>({ children, element, props = {} }: CloneElementProps<P>) {
  return React.cloneElement(element, props, children)
}
