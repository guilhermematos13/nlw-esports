import './styles/main.css';
import logoImg from '../src/assets/logo-esports.svg';
import * as Dialog from '@radix-ui/react-dialog';
import { GameBanner } from './components/GameBanner';
import { CreatAdBanner } from './components/CreatAdBanner';
import { useEffect, useState } from 'react';
import { CreateAdModal } from './components/Form/createAdModal';
import axios from 'axios';

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

      <div className="gap-6 mt-16 mobile:flex flex-col tablet:grid tablet:grid-cols-3 lg:grid lg:px-4 lg:grid-cols-6 ">
        {games.map((game) => {
          return (
            <GameBanner
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.ads}
            />
          );
        })}
      </div>
      <Dialog.Root>
        <CreatAdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </div>
  );
}

export default App;
