interface GameBannerProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
}

export function GameBanner(props: GameBannerProps) {
  return (
    <div className="relative overflow-hidden cursor-grab flex justify-center">
      <img src={props.bannerUrl} alt="#" />
      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 tablet:left-0 tablet:right-0">
        <strong className="font-bold text-white block">{props.title}</strong>
        <span className="text-zinc-300 text-sm block">
          {props.adsCount} anúncio(s)
        </span>
      </div>
    </div>
  );
}
