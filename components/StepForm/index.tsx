import { useForm, UseFormReturn } from 'react-hook-form';
import { useAvailableSections } from '../../lib/use-available-sections';
import { useShowModal } from '../../lib/use-modal';
import { MessageModal, HintModal } from '../Modal';

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

  const showModal = useShowModal()

  return (
    <form className="flex flex-col items-center" onSubmit={handleSubmit((data) => {
      if (!data.value) {
        showModal(<MessageModal>回答を入力してね！</MessageModal>)
      } else if (data.value !== answer) {
        showModal(<MessageModal>回答が違うみたいだ・・・</MessageModal>)
      } else {
        const onConfirm = () => {
          setTimeout(() => {
            moveToAvailableSection(i => i + 1)
          }, 100)
        }

        addNextStepToAvailableSections()
        showModal(<MessageModal onConfirm={onConfirm}>おめでとう！正解！</MessageModal>)
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
            showModal(<HintModal hint={"ヒント"} answer={`答え：${answer}`}/>)
          }}
        >
          ヒントを見る
        </button>
      </div>
    </form>
  )
}