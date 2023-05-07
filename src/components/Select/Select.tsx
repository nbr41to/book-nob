import { clsx } from 'clsx';
import { forwardRef, useId } from 'react';

type Props = JSX.IntrinsicElements['select'] & {
  options: {
    label: string;
    value: string;
  }[];
  label?: string;
  required?: boolean;
  errorMessage?: string;
  selectablePlaceholder?: boolean;
};

export const Select = forwardRef<HTMLSelectElement, Props>(
  (
    {
      options,
      label,
      required = false,
      errorMessage,
      selectablePlaceholder = false,
      ...rest
    },
    ref,
  ) => {
    const id = useId();

    return (
      <label htmlFor={id}>
        {label && (
          <>
            <span className='text-sm'>{label}</span>
            {required && (
              <span className='text-xs text-red-500 font-bold ml-2'>必須</span>
            )}
          </>
        )}
        <select
          id={id}
          className={clsx([
            'mt-1 rounded-md p-3 outline-none cursor-pointer w-full',
            errorMessage ? 'border-red-500 border-2' : 'border',
          ])}
          ref={ref}
          {...rest}
        >
          <option value='' disabled={!selectablePlaceholder}>
            {rest.placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errorMessage && (
          <div className='mt-1 text-xs text-red-500 font-bold'>
            {errorMessage}
          </div>
        )}
      </label>
    );
  },
);

Select.displayName = 'Select';
