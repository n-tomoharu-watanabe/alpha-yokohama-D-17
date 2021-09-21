import React, { useMemo } from 'react';
import { ImgCard } from '../../components/ImgCard';
import { StepForm } from '../../components/StepForm';

const Answer = "3"

const Modal = {
  hint: "前のページに犯人の特徴が・・？",
  answer: "No.4 犯人D"
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
              src={`images/step3/${i + 1}.png`}
              title={`犯人${"ABCD"[i]}`}
              isSelect={getValues("value") === String(i)}
              onClick={() => setValue("value", String(i))}
              imgHeight={"35vh"}
              key={i}
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