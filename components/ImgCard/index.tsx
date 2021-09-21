import { MouseEventHandler } from "react"

interface ImgCardProps {
  src: string
  title: React.ReactNode
  isSelect: boolean
  imgHeight: string
  filter?: string
  onClick?: MouseEventHandler
  children?: React.ReactNode
}

export function ImgCard({ src, title, isSelect, imgHeight,filter, onClick, children }: ImgCardProps) {
  return (
    <div className={`
      flex m-1 rounded-xl text-xl text-black overflow-hidden bg-none border-4 border-blue-300
      ${isSelect ? "border-opacity-100" : "border-opacity-0"}
    `} onClick={onClick}>
      <div className="bg-gray-50 card-overlay">
        <div className="relative" style={{ height: imgHeight }}>
          <img src={src} className={`h-full w-full filter ${filter ? filter : ""}`} />
          <div className="absolute left-0 bottom-0 px-2 pb-2">
            <span className="text-3xl text-white">
              {title}
            </span>
          </div>
        </div>
        {children && (
          <div className="px-2 pb-2">
            {children}
          </div>
        )}
      </div>
    </div>
  )
}