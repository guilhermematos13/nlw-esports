import { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/main.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import logoImg from '../src/assets/logo-esports.svg';

import * as Dialog from '@radix-ui/react-dialog';
import Slider from 'react-slick';

import { GameBanner } from './components/GameBanner';
import { CreatAdBanner } from './components/CreatAdBanner';
import { CreateAdModal } from './components/Form/createAdModal';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    axios('http://localhost:3333/games').then((response) => {
      setGames(response.data);
    });
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />

      <h1 className="text-white font-black mt-20 mobile:text-3xl tablet:text-5xl lg:text-6xl">
        Seu{' '}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{' '}
        está aqui.
      </h1>
      <div className="w-full mt-16 ">
        <Slider {...settings}>
          {games.map((game) => (
            <GameBanner
              adsCount={game._count.ads}
              title={game.title}
              bannerUrl={game.bannerUrl}
              key={game.id}
            />
          ))}
        </Slider>
      </div>

      <Dialog.Root>
        <CreatAdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </div>
  );
}

export default App;
