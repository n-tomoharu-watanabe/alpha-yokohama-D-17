import { useForm, UseFormReturn } from 'react-hook-form';
import { useAvailableSections } from '../../lib/use-available-sections';

interface StepFormType {
  value: string | null
}

interface StepFormProps {
  value?: string
  answer: string
  header?: React.ReactNode
  children?: (hooks: UseFormReturn<StepFormType, object>) => React.ReactNode
}

export const StepForm = ({ value = "", answer, header, children }: StepFormProps) => {
  const {
    moveToAvailableSection,
    addNextStepToAvailableSections
  } = useAvailableSections()

  const formHooks = useForm<StepFormType>({ defaultValues: { value } })
  const { handleSubmit, setValue } = formHooks

  return (
    <form className="flex flex-col items-center" onSubmit={handleSubmit((data) => {
      if (!data.value) {
        alert("回答を入力してね！")
      } else if (data.value !== answer) {
        alert("回答が違うみたいだ・・・")
      } else {
        alert("おめでとう！正解！")
        addNextStepToAvailableSections()
        setTimeout(() => {
          moveToAvailableSection(i => i + 1)
        }, 100)
      }
    })}>

      {header}

      <div>
        {children?.(formHooks)}
      </div>


      <div className="text-xl mt-2">
        <button
          type="submit"
          className="px-2 py-1 m-1 bg-gray-100 hover:bg-gray-300 text-gray-700 rounded"
        >
          決定
        </button>
        <button
          type="button"
          className="px-2 py-1 m-1 bg-gray-100 hover:bg-gray-300 text-gray-700 rounded"
          onClick={() => {
            const result = confirm("本当に回答を確認する?")
            if (result) { setValue("value", answer) }
          }}
        >
          回答をみる
        </button>
      </div>
    </form>
  )
}
