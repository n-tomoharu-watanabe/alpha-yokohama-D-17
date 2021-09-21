import { MouseEventHandler, useMemo } from 'react';
import { StepForm } from '../../components/StepForm';

const Answer = "3"

const Modal = {
  hint: "前のページに犯人の特徴が・・？",
  answer: "No.4 犯人D"
}

interface ImgCardProps {
  src: string
  title: React.ReactNode
  select: boolean
  onClick: MouseEventHandler
  children?: React.ReactNode
}

const ImgCard = ({ src, title, select, onClick, children }: ImgCardProps) => {
  return (
    <div className={`
      m-1 rounded-xl text-xl text-black overflow-hidden bg-none border-4 border-blue-300
      ${select ? "border-opacity-100" : "border-opacity-0"}
    `} onClick={onClick}>
      <div className="bg-gray-50 card-overlay">
        <div className="relative" style={{ height: "35vh", maxWidth: "23vw" }}>
          <img src={src} className="h-full w-full" />
          <div className="absolute left-0 bottom-0 px-2 pb-2">
            <span className="text-3xl text-white">
              {title}
            </span>
          </div>
        </div>
        <div className="px-2 pb-2">
          {children}
        </div>
      </div>
    </div>
  )
}

export const Page = () => {
  const Header = (
    <div>
      <h1>Q3. 犯人はどの人・・？</h1>
    </div>
  )

  return (
    <StepForm answer={Answer} header={Header} modal={Modal} >
      {({ getValues, setValue, watch }) => (useMemo(() => (
        <div className="flex">
          {[0, 1, 2, 3].map(i => (
            <ImgCard
              src="https://placehold.jp/888888/ffffff/400x600.png?text=No%20Image"
              title={`犯人${"ABCD"[i]}`}
              select={getValues("value") === String(i)}
              onClick={() => setValue("value", String(i))}
            >
              <div>1. 特徴1</div>
              <div>2. 特徴2</div>
              <div>3. 特徴3</div>
            </ImgCard>
          ))}
        </div>
      ), [watch("value")]))}
    </StepForm>
  )
}

export default (<div><Page /></div>)