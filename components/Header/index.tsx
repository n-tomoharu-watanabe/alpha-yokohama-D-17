export const Header = () => {
  return (
    <div className="flex justify-between items-end w-screen bg-gray-600 text-white text-xs lg:text-base">
      <div className="mx-2 my-1 whitespace-nowrap text-center">
        <span className="text-3xl font-thin" style={{fontFamily: '"Noto Sans JP", sans-serif'}}>ビバリーヒルズからの脱出！</span>
      </div>

      <div className="mx-2 my-1 whitespace-nowrap">
        <span>制作：プロNα 横浜 D-17</span>
      </div>
    </div>
  )
}