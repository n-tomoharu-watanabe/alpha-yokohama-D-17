import { StepForm } from '../../components/StepForm';

const Answer = "2"

export const Page = () => {
  const Header = (
    <div>
      <h1>Q1. 幼馴染みがいる場所は・・？</h1>
    </div>
  )

  return (
    <StepForm answer={Answer} header={Header} >
      {({ register }) => ([0, 1, 2].map(i => (
        <div key={i} className="text-2xl">
          <input
            type="radio"
            value={i}
            className="w-4 h-4 align-middle"
            style={{ margin: "0 0.3em" }}
            {...register("value")}
          />
          <span>{i + 1}. 場所{"ABCD"[i]}</span>
        </div>
      )))}
    </StepForm>
  )
}

export default (<div><Page /></div>)