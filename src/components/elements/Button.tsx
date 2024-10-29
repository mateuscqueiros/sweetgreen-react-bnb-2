import { ReactElement } from 'react';
import { cn } from '../../utils/cn';

type ButtonProps = {
  icon?: ReactElement;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, className, icon }: ButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        'bg-button p-4 rounded-full w-[150px] b-0 text-black cursor-pointer font-semibold flex justify-center items-center',
        className
      )}
    >
      {children}
      {icon && <span>{icon}</span>}
    </button>
  );
}

type ActionButtonProps = {
  variant: 'primary' | 'secondary';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function ActionButton({ variant, children }: ActionButtonProps) {
  let colors = '';

  if (variant === 'primary') colors = 'bg-header-text text-white';
  if (variant === 'secondary') colors = 'text-header-text bg-none';

  return (
    <div
      className={cn(
        'font-light uppercase rounded-full py-[6px] px-5 border-0 cursor-pointer hover:opacity-80',
        colors
      )}
    >
      {children}
    </div>
  );
}
