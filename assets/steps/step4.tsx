import { useEffect, useState } from 'react';
import { DraggableList } from '../../components/DroppableList';
import { StepForm } from '../../components/StepForm';

function shuffle<T>(array: T[]) {
  return array.sort(() => Math.random() - 0.5)
}

const Answer = "ろじうらのみせ"

const Modal = {
  hint: "最初と最後の文字はそのままだよ！（ろ？？？？？せ）",
  answer: "ろじうらのみせ",
}

function useIsFirst(): boolean {
  const [flag, setFlag] = useState<boolean>(true)
  useEffect(() => { setFlag(false) }, [])
  return flag
}

export const Page = () => {
  const isFirst = useIsFirst()
  const [items, setItems] = useState<string[]>([])

  const Header = (
    <div>
      <h1>Q4. テレポーターの場所は・・？</h1>
    </div>
  )

  useEffect(() => {
    setItems(["ろ", ...shuffle(Array.from("じうらのみ")), "せ"])
  }, [])

  return (
    <StepForm value={""} answer={Answer} header={Header} modal={Modal} >
      {({ setValue }) => (isFirst ? null : (
        <DraggableList items={items} onDragEnd={items => {
          setItems(items)
          setValue("value", items.join(""))
        }} container={(
          <div className="flex justify-center w-96 rounded border-2 bg-gray-500 border-gray-100"></div>
        )}>
          {(item) => (
            <div className="px-2 py-1 m-2 text-center flex-grow rounded bg-gray-100 text-gray-700">
              {item}
            </div>
          )}
        </DraggableList>
      ))}
    </StepForm>
  )
}

export default (<div><Page /></div>)