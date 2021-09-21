import React, { useMemo } from 'react';
import { ImgCard } from '../../components/ImgCard';
import { StepForm } from '../../components/StepForm';

const Answer = "3"

const Hint = `
以下が4人のアリバイを整理してみたよ！
エミリー「私はずっと部屋に居たわ。」
ケン「僕はレストランで食事をとっていたよ。」
ボブ「俺は喫煙室で煙草を吸っていたけど、さっき部屋に戻ったところだよ。」
ウィリアム「私は先ほどホテルに帰ってきて、エントランスで休憩していました。」
`

const Names = ["エミリー", "ケン", "ボブ", "ウィリアム"]

const Modal = {
  hint: <div className="whitespace-pre-wrap">{Hint}</div>  ,
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
          {Names.map((name, i) => (
            <ImgCard
              src={`images/step3/${i + 1}.png`}
              title={name}
              isSelect={getValues("value") === String(i)}
              onClick={() => setValue("value", String(i))}
              imgHeight={"35vh"}
              key={i}
            />
          ))}
        </div>
      ), [watch("value")]))}
    </StepForm>
  )
}

export default (<div><Page /></div>)