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
              src={i % 2 ? (
                "https://placehold.jp/888888/ffffff/800x600.png?text=No%20Image"
              ) : (
                "https://placehold.jp/888888/ffffff/400x600.png?text=No%20Image"
              )}
              title={`場所${"ABCD"[i]}`}
              isSelect={getValues("value") === String(i)}
              onClick={() => setValue("value", String(i))}
              imgHeight={"30vh"}
              key={i}
            >
              {i === 2 ? (
                <>
                  <div>1. 特徴1</div>
                  <div>2. 特徴2</div>
                  <div>3. 特徴3</div>
                  <div>4. 特徴4</div>
                </>
              ) : (
                <>
                  <div>1. 特徴1</div>
                </>
              )}
            </ImgCard>
          ))}
        </div>
      ), [watch("value")]))}
    </StepForm>
  )
}

export default (<div><Page /></div>)