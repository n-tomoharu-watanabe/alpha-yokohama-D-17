import { CloneElement } from "../CloneElement"

function insertText(where: "before" | "after", text1: string, text2: string) {
  return (where === "after" ? `${text1} ${text2}` : `${text2} ${text1}`).trim()
}

interface InsertClassNameProps {
  where: "before" | "after"
  className: string
  children: React.ReactElement
}

export function InsertClassName({ children, className, where }: InsertClassNameProps) {
  return (<CloneElement
    element={children as JSX.Element}
    props={{ className: insertText(where, className, children.props.className)}}
    // eslint-disable-next-line react/no-children-prop
    children={children.props.children}
  />)
}