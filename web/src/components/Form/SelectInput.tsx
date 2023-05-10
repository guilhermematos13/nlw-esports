import * as Select from '@radix-ui/react-select';
import { CaretDown } from '@phosphor-icons/react';
import { forwardRef } from 'react';

const SelectItemInput = forwardRef(
  ({ children, ...props }: any, forwardRef) => {
    return (
      <Select.Item {...props} ref={forwardRef}>
        <Select.ItemText>{children}</Select.ItemText>
      </Select.Item>
    );
  }
);

export function SelectInput() {
  return (
    <Select.Root>
      <Select.Trigger className="inline-flex justify-between items-center px-4 py-3 bg-zinc-900 rounded text-zinc-400 text-sm">
        <Select.Value placeholder="Selecione o game que deseja jogar" />
        <Select.Icon className="text-zinc-400">
          <CaretDown size={24} />
        </Select.Icon>
      </Select.Trigger>

      <Select.Content className="overflow-hidden px-4 py-3 w-[400px] mt-[4.5rem] bg-zinc-900 rounded-sm shadow-md">
        <Select.Group>
          <SelectItemInput
            className="flex text-zinc-500 relative cursor-pointer text-sm p-2 rounded hover:text-zinc-200 hover:bg-zinc-700"
            value="League of Legends"
          >
            League of Legends
          </SelectItemInput>
          <SelectItemInput
            className="flex text-zinc-500 relative cursor-pointer text-sm p-2 rounded hover:text-zinc-200 hover:bg-zinc-700"
            value="Fifa 23"
          >
            Fifa 23
          </SelectItemInput>
          <SelectItemInput
            className="flex text-zinc-500 relative cursor-pointer text-sm p-2 rounded hover:text-zinc-200 hover:bg-zinc-700"
            value="Valorant"
          >
            Valorant
          </SelectItemInput>
          <SelectItemInput
            className="flex text-zinc-500 relative cursor-pointer text-sm p-2 rounded hover:text-zinc-200 hover:bg-zinc-700"
            value="Fortnite"
          >
            Fortnite
          </SelectItemInput>
          <SelectItemInput
            className="flex text-zinc-500 relative cursor-pointer text-sm p-2 rounded hover:text-zinc-200 hover:bg-zinc-700"
            value="Counter-Strike"
          >
            Counter-Strike
          </SelectItemInput>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
}
