import { useAvailableSections } from "../../lib/use-available-sections"

const Page = () => {
  const {
    moveToAvailableSection,
    addNextStepToAvailableSections
  } = useAvailableSections()
 
  return (
    <div className="flex flex-col items-center">
      <h1>ようこそ！</h1>
      <button className="
        text-3xl m-2 px-4 py-2 rounded-lg border-white border-2 
        bg-gray-100 hover:bg-gray-700 
        text-gray-700 hover:text-gray-100
      " onClick={() => {
        addNextStepToAvailableSections()
        setTimeout(() => {
          moveToAvailableSection(i => i + 1)
        }, 500)
      }}>
        Let's Start!
      </button>
    </div>
  )
}

export default <Page />