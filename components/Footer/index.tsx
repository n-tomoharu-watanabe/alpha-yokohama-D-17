interface FooterPsops {
  isFullScreen: boolean
}

export const Footer = ({ isFullScreen }: FooterPsops) => {
  return (isFullScreen ? (
    <div className="flex justify-between items-center w-screen bg-gray-600 text-white text-xs lg:text-base">
      <div className="mx-1 whitespace-nowrap text-center">
        <span>授業主催：N・S高</span><span className="mx-2">|</span>
        <span>協力：株式会社SCRAP</span><span className="mx-2">|</span>
        <span>企画制作：N・S高生</span>
      </div>

      <div className="mx-1 whitespace-nowrap">
        <span>SCRAPが主催/公認するものではありません。</span>
      </div>
    </div>
  ) : (
    <div className="relative flex justify-between w-screen bg-gray-600 text-white text-xs lg:text-base">
      <div className="flex mx-16">
        <div className="">
          <div>授業主催：</div>
          <div>協力：</div>
          <div>企画制作：</div>
        </div>
        <div className="ml-2">
          <div>N・S高</div>
          <div>株式会社SCRAP</div>
          <div>N・S高生</div>
        </div>
      </div>

      <div className="flex items-center mx-2">
        <div>
          「リアル脱出ゲーム」は株式会社SCRAPの登録商標です。<br />
          株式会社SCRAPとN・S高で実施した授業「リアル脱出ゲームの作り方」の一環で<br />
          生徒が制作したものであり、SCRAPが主催/公認するものではありません。
        </div>
      </div>
    </div>
  ))
}