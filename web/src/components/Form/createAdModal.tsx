import * as Dialog from '@radix-ui/react-dialog';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as Select from '@radix-ui/react-select';
import * as ToggleGroup from '@radix-ui/react-toggle-group';

import { Input } from './Input';
import { Check, GameController, CaretDown } from '@phosphor-icons/react';
import { FormEvent, forwardRef, useEffect, useState } from 'react';
import axios from 'axios';

interface Game {
  id: string;
  title: string;
}

const SelectItemInput = forwardRef(
  ({ children, ...props }: any, forwardRef) => {
    return (
      <Select.Item {...props} ref={forwardRef}>
        <Select.ItemText>{children}</Select.ItemText>
      </Select.Item>
    );
  }
);

export function CreateAdModal() {
  const [games, setGames] = useState<Game[]>([]);
  const [weekDays, setWeekDays] = useState<string[]>([]);
  const [useVoiceChannel, setUseVoiceChannel] = useState(false);

  useEffect(() => {
    axios('http://localhost:3333/games').then((response) => {
      setGames(response.data);
    });
  }, []);

  async function handleCreateAd(event: FormEvent) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    if (!data.name) {
      return;
    }

    try {
      await axios.post(`http://localhost:3333/games/${data.game}/ads`, {
        name: data.name,
        yearsPlaying: Number(data.yearsPlaying),
        discord: data.discord,
        weekDays: weekDays.map(Number),
        hourStart: data.hourStart,
        hourEnd: data.hourEnd,
        userVoiceChannel: useVoiceChannel,
      });
      alert('Anúncio criado com sucesso');
    } catch (err) {
      alert('Erro ao criar o anúncio');
    }
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
      <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg shadow-black/25 lg:w-[480px]">
        <Dialog.Title className="text-3xl text-white font-black">
          Publique um anúncio
        </Dialog.Title>
        <form onSubmit={handleCreateAd} className="mt-8 flex flex-col gap-4">
          <div className="flex flex-col gap-2 mobile:text-xs tablet:text-sm lg:text-base">
            <label htmlFor="game" className="font-semibold">
              Qual o game?
            </label>
            <Select.Root name="game">
              <Select.Trigger className="inline-flex justify-between items-center px-4 py-3 bg-zinc-900 rounded text-zinc-400 text-sm">
                <Select.Value placeholder="Selecione o game que deseja jogar" />
                <Select.Icon className="text-zinc-400">
                  <CaretDown size={24} />
                </Select.Icon>
              </Select.Trigger>
              <Select.Content className="overflow-hidden mt-[4.5rem] px-4 py-3 bg-zinc-900 rounded-sm shadow-md mobile:w-[17.313rem] tablet:w-[19.65rem] lg:w-[400px] ">
                <Select.Group>
                  {games.map((game) => {
                    return (
                      <SelectItemInput
                        key={game.id}
                        className="flex text-zinc-500 relative cursor-pointer text-sm p-2 rounded hover:text-zinc-200 hover:bg-zinc-700"
                        value={game.id}
                      >
                        {game.title}
                      </SelectItemInput>
                    );
                  })}
                </Select.Group>
              </Select.Content>
            </Select.Root>
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label
              htmlFor="name"
              className="font-semibold mobile:text-xs tablet:text-sm lg:text-base"
            >
              Seu nome (ou nickname)
            </label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Como te chamam dentro do game?"
            />
          </div>
          <div className="gap-6 mobile:flex flex-col lg:grid grid-cols-2">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="yearsPlaying"
                className="font-semibold mobile:text-xs tablet:text-sm lg:text-base"
              >
                Joga há quantos anos?
              </label>
              <Input
                id="yearsPlaying"
                name="yearsPlaying"
                type="number"
                placeholder="Tudo bem ser ZERO"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="discord"
                className="font-semibold mobile:text-xs tablet:text-sm lg:text-base"
              >
                Qual seu Discord?
              </label>
              <Input
                name="discord"
                id="discord"
                type="text"
                placeholder="Usuario#0000"
              />
            </div>
          </div>
          <div className="flex gap-6 mobile:flex-col lg:flex-row">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="weekDays"
                className="font-semibold mobile:text-xs tablet:text-sm lg:text-base"
              >
                Quando costuma jogar?
              </label>

              <ToggleGroup.Root
                type="multiple"
                className="grid grid-cols-4 gap-2"
                value={weekDays}
                onValueChange={setWeekDays}
              >
                <ToggleGroup.Item
                  value="0"
                  title="Domingo"
                  className={`w-8 h-8 rounded ${
                    weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'
                  }`}
                >
                  D
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="1"
                  className={`w-8 h-8 rounded ${
                    weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'
                  }`}
                  title="Segunda"
                >
                  S
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="2"
                  className={`w-8 h-8 rounded ${
                    weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'
                  }`}
                  title="Terça"
                >
                  T
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="3"
                  className={`w-8 h-8 rounded ${
                    weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'
                  }`}
                  title="Quarta"
                >
                  Q
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="4"
                  className={`w-8 h-8 rounded ${
                    weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'
                  }`}
                  title="Quinta"
                >
                  Q
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="5"
                  className={`w-8 h-8 rounded ${
                    weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'
                  }`}
                  title="Sexta"
                >
                  S
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="6"
                  className={`w-8 h-8 rounded ${
                    weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'
                  }`}
                  title="Sabádo"
                >
                  S
                </ToggleGroup.Item>
              </ToggleGroup.Root>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <label
                htmlFor="hourStart"
                className="font-semibold mobile:text-xs tablet:text-sm lg:text-base"
              >
                Qual horário do dia?
              </label>

              <div className="grid grid-cols-2 gap-2">
                <Input
                  name="hourStart"
                  id="hourStart"
                  placeholder="De"
                  type="time"
                />
                <Input
                  name="hourEnd"
                  id="hourEnd"
                  placeholder="Ate"
                  type="time"
                />
              </div>
            </div>
          </div>
          <label className="mt-2 flex gap-2 text-sm items-center cursor-pointer">
            <Checkbox.Root
              checked={useVoiceChannel}
              onCheckedChange={(checked) => {
                if (checked === true) {
                  setUseVoiceChannel(true);
                } else {
                  setUseVoiceChannel(false);
                }
              }}
              className="w-6 h-6 p-1 rounded bg-zinc-900"
            >
              <Checkbox.Indicator>
                <Check className="h-4 w-4 text-emerald-400" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            Costumo me conectar ao chat de voz
          </label>
          <footer className="mt-4 flex justify-end gap-4">
            <Dialog.Close
              type="button"
              className="bg-zinc-500 px-5 h-12 font-semibold rounded-md"
            >
              Cancelar
            </Dialog.Close>
            <button
              type="submit"
              className="flex font-semibold items-center px-5 py-2 rounded-md bg-violet-500 gap-3 hover:bg-violet-600 transition-all"
            >
              <GameController size={24} />
              Encontrar duo
            </button>
          </footer>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
