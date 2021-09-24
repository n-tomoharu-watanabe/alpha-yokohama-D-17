import { useForm, UseFormReturn } from 'react-hook-form';
import { useAvailableSections } from '../../lib/use-available-sections';
import { useShowModal } from '../../lib/use-modal';
import { getAnchorLinkNumber } from '../../utils/anchor-link';
import { MessageModal, HintModal } from '../Modal';

function isNumber(value: unknown): value is number {
  return ((typeof value === 'number') && (isFinite(value)));
}

interface StepFormType {
  value: string | null
}

interface StepFormProps {
  value?: string
  answer: string
  header?: React.ReactNode
  modal?: { hint?: React.ReactNode, answer?: React.ReactNode }
  children?: (hooks: UseFormReturn<StepFormType, object>) => React.ReactNode
}

export const StepForm = ({ value = "", answer, header, modal, children }: StepFormProps) => {
  const {
    isAvailableSction,
    moveToAvailableSection,
    addNextStepToAvailableSections
  } = useAvailableSections()

  const formHooks = useForm<StepFormType>({ defaultValues: { value } })
  const { handleSubmit } = formHooks

  const showModal = useShowModal()

  return (
    <form className="flex flex-col items-center" onSubmit={handleSubmit((data) => {
      if (!data.value) {
        showModal(<MessageModal>回答を入力してね！</MessageModal>)
      } else if (data.value !== answer) {
        showModal(<MessageModal>回答が違うみたいだ・・・</MessageModal>)
      } else {
        const nowSection = getAnchorLinkNumber()

        if (!isAvailableSction(nowSection + 1)) {
          addNextStepToAvailableSections()
        }

        const onConfirm = () => {
          setTimeout(() => {
            moveToAvailableSection(i => i + 1)
          }, 100)
        }

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
            showModal(<HintModal
              hint={modal?.hint ?? "ヒントが設定されていません"}
              answer={`答え：${modal?.answer ?? (isNumber(parseInt(answer)) ? `No.${parseInt(answer) + 1}` : answer)}`}
            />)
          }}
        >
          ヒントを見る
        </button>
      </div>
    </form>
  )
}
