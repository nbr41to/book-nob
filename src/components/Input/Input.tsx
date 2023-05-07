import { clsx } from 'clsx';
import { forwardRef, useId } from 'react';

type Props = JSX.IntrinsicElements['input'] & {
  label?: string;
  required?: boolean;
  errorMessage?: string;
};

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, required = false, errorMessage, ...rest }, ref) => {
    const id = useId();
    return (
      <label htmlFor={id} className='cursor-pointer'>
        {label && (
          <>
            <span className='text-sm'>{label}</span>
            {required && (
              <span className='text-xs text-red-500 font-bold ml-2'>必須</span>
            )}
          </>
        )}
        <input
          id={id}
          className={clsx([
            'mt-1 rounded-md px-3 py-2 outline-none block w-full',
            errorMessage ? 'border-red-500 border-2' : 'border',
          ])}
          ref={ref}
          {...rest}
        />
        {errorMessage && (
          <div className='mt-1 text-xs text-red-500 font-bold'>
            {errorMessage}
          </div>
        )}
      </label>
    );
  },
);

Input.displayName = 'Input';
