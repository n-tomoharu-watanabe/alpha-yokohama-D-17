import { Footer } from "../Footer"
import { Header } from "../Header"
import { SideButton } from "../SideButton"

interface PageNavProps {
  disabledSideButton: ((index: number) => boolean)
  onClickSideButton?: ((index: number) => void)
}

export const PageNav = (props: PageNavProps) => {
  return (
    <>
      <div className="fixed top-0">
        <Header />
      </div>

      <div className="fixed bottom-0">
        <Footer />
      </div>

      <div className="fixed left-0 top-1/2 transform -translate-y-1/2">
        <SideButton
          onClick={() => { props.onClickSideButton?.(-1) }}
          disabled={props.disabledSideButton(-1)}
        >◀︎</SideButton>
      </div>

      <div className="fixed right-0 top-1/2 transform -translate-y-1/2">
        <SideButton
          onClick={() => { props.onClickSideButton?.(1) }}
          disabled={props.disabledSideButton(1)}
        >▶︎</SideButton>
        <br />
      </div>
    </>
  )
}
