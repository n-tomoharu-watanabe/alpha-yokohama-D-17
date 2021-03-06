import { StepForm } from '../../components/StepForm';

const Value = "○○○○"
const Answer = "きんぱつ"

const Modal = {
  hint: "漢字の書かれている部分を読むと・・？",
  answer: "きんぱつ",
}

export const Page = () => {
  const Header = (
    <div>
      <h1>Q2. 隠されている文字は・・？</h1>
      <img src="images/step2/main.png" className="max-w-full mb-4" alt="" />
    </div>
  )

  return (
    <StepForm value={Value} answer={Answer} header={Header} modal={Modal} >
      {({ register }) => (
        <div className="text-2xl text-gray-700">
          <input
            type="text"
            className="text-center"
            style={{
              letterSpacing: "1em",
              paddingLeft: "1em",
              margin: "0 0.3em",
            }}
            {...register("value")}
          />
        </div>
      )}
    </StepForm>
  )
}

export default (<div><Page /></div>)