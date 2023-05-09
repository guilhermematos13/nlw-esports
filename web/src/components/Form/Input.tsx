import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps) {
  return (
    <input
      {...props}
      className="px-4 py-3 bg-zinc-900 rounded text-zinc-400 text-sm placeholder:text-zinc-500"
    />
  );
}
