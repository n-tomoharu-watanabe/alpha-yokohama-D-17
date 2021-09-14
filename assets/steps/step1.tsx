import { useForm } from 'react-hook-form';
import { useAvailableSections } from '../../lib/use-available-sections';

interface FormType {
  select: string | null
}

const Answer = "2"

export const Page = () => {
  const {
    moveToAvailableSection,
    addNextStepToAvailableSections
  } = useAvailableSections()

  const { register, handleSubmit, setValue } = useForm<FormType>()

  return (
    <div className="flex flex-col items-center">
      <h1>Q1. 幼馴染みがいる場所は・・？</h1>
      <form onSubmit={handleSubmit((data) => {
        if (!data.select) {
          alert("回答を入力してね！")
        } else if (data.select !== Answer) {
          alert("回答が違うみたいだ・・・")
        } else {
          alert("おめでとう！正解！")
          addNextStepToAvailableSections()
          setTimeout(() => {
            moveToAvailableSection(i => i + 1)
          }, 100)
        }
      })}>
        <div>
          <input type="radio" value={0} {...register("select")} />
          <span>1. 場所A"</span>
        </div>
        <div>
          <input type="radio" value={1} {...register("select")} />
          <span>2. 場所B"</span>
        </div>
        <div>
          <input type="radio" value={2} {...register("select")} />
          <span>3. 場所C"</span>
        </div>
        <div>
          <button
            type="submit"
            className="px-2 py-1 m-1 bg-gray-100 hover:bg-gray-300 text-gray-700 rounded"
          >
            決定！
          </button>
          <button
            type="button"
            className="px-2 py-1 m-1 bg-gray-100 hover:bg-gray-300 text-gray-700 rounded"
            onClick={() => {
              const result = confirm("本当に回答を確認する?")
              if (result) { setValue("select", Answer) }
            }}
          >
            回答をみる
          </button>
        </div>
      </form>
    </div>
  )
}

export default (<div><Page /></div>)