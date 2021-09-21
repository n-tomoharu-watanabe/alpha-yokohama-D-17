import React, { useMemo } from 'react';
import { ImgCard } from '../../components/ImgCard';
import { StepForm } from '../../components/StepForm';

const Answer = "3"

const Modal = {
  hint: "前のページに場所の特徴が・・？",
  answer: "No.4 場所D"
}

export const Page = () => {
  const Header = (
    <div>
      <h1>Q1. 幼馴染みがいる場所は・・？</h1>
    </div>
  )

  return (
    <StepForm answer={Answer} header={Header} modal={Modal} >
      {({ getValues, setValue, watch }) => (useMemo(() => (
        <div className="flex">
          {[0, 1, 2, 3].map(i => (
            <ImgCard
              src={`images/step1/${i + 1}.jpg`}
              title={`場所${"ABCD"[i]}`}
              isSelect={getValues("value") === String(i)}
              filter="brightness-75"
              onClick={() => setValue("value", String(i))}
              imgHeight={"30vh"}
              key={i}
            />
          ))}
        </div>
      ), [watch("value")]))}
    </StepForm>
  )
}

export default (<div><Page /></div>)