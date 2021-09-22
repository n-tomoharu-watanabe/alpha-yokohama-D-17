interface HeaderProps {
  isFullScreen: boolean
  toggleIsFullScreen: () => void
}

const ToggleButton = ({ children, ...props }: JSX.IntrinsicElements["button"]) => {
  return (
    <button {...props} className="
      w-8 lg:w-10 h-8 lg:h-10 rounded-full bg-gray-600 hover:bg-gray-500 text-white shadow-md
      transform -rotate-45
    ">
      {children}
    </button>
  )
}

export const Header = ({ isFullScreen, toggleIsFullScreen }: HeaderProps) => {
  return (!isFullScreen ? (
    <div className="relative w-screen">
      <div className="flex justify-between items-end w-screen bg-gray-600 text-white text-xs lg:text-base">
        <div className="mx-2 my-1 whitespace-nowrap text-center">
          <span className="text-3xl font-thin" style={{ fontFamily: '"Noto Sans JP", sans-serif' }}>
            映画からの脱出 at BEVERLY HILLS
          </span>
        </div>

        <div className="mx-2 my-1 whitespace-nowrap">
          <span>制作：プロNα 横浜 D-17</span>
        </div>
      </div>

      <div className="absolute right-0 top-full p-2">
        <ToggleButton onClick={() => toggleIsFullScreen()}>←→</ToggleButton>
      </div>
    </div>
  ) : (
    <div className="relative w-screen">
      <div className="absolute right-0 top-full p-2">
        <ToggleButton onClick={() => toggleIsFullScreen()}>→←</ToggleButton>
      </div>
    </div>
  ))
}