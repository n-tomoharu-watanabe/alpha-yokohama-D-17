import { useEffect, useState } from 'react';
import { DraggableList } from '../../components/DroppableList';
import { StepForm } from '../../components/StepForm';

function shuffle<T>(array: T[]) {
  return array.sort(() => Math.random() - 0.5)
}

const Items = shuffle(Array.from("テレポーター"))
const Answer = "テレポーター"

const Modal = {
  hint: "マウスのドラッグで、並び替えてみると・・？",
  answer: "テレポーター",
}

function useIsFirst(): boolean {
  const [flag, setFlag] = useState<boolean>(true)
  useEffect(() => { setFlag(false) }, [])
  return flag
}

export const Page = () => {
  const isFirst = useIsFirst()
  const [items, setItems] = useState(Items)

  const Header = (
    <div>
      <h1>Q4. テレポーターの場所は・・？</h1>
    </div>
  )

  return (
    <StepForm value={Items.join("")} answer={Answer} header={Header} modal={Modal} >
      {({ setValue }) => (isFirst ? null : (
        <DraggableList items={items} onDragEnd={items => {
          setItems(items)
          setValue("value", items.join(""))
        }} container={(
          <div className="flex justify-center w-80 rounded border-2 bg-gray-500 border-gray-100"></div>
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