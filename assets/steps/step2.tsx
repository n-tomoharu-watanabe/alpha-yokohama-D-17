import { StepForm } from '../../components/StepForm';

const Value = "○○○○"
const Answer = "きんぱつ"

export const Page = () => {
  const Header = (
    <div>
      <h1>Q2. 暗号が示しめしている文字は・・？</h1>
    </div>
  )

  return (
    <StepForm value={Value} answer={Answer} header={Header} >
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