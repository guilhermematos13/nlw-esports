interface GameBannerProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
}

export function GameBanner(props: GameBannerProps) {
  return (
    <div className="relative overflow-hidden cursor-grab ">
      <img src={props.bannerUrl} alt="#" />
      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient left-0 right-0 absolute bottom-0 mobile:w-[285px]">
        <strong className="font-bold text-white block">{props.title}</strong>
        <span className="text-zinc-300 text-sm block">
          {props.adsCount} anúncio(s)
        </span>
      </div>
    </div>
  );
}
