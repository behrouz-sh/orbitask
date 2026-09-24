import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from 'cn';
import * as React from 'react';

import { ButtonLoader } from './ButtonLoader';

const buttonVariants = cva(
  [
    // Layout
    'inline-flex shrink-0 items-center justify-center',
    'whitespace-nowrap',

    // Shape
    'rounded-lg border border-transparent',

    // Behavior
    'select-none bg-clip-padding',
    'outline-none',
    'transition-colors',

    // Accessibility
    'focus-visible:ring-2 focus-visible:ring-primary-500/20',
    'disabled:cursor-not-allowed',
  ],
  {
    variants: {
      variant: {
        filled: [
          'bg-primary-500 text-white!',
          'hover:bg-primary-600',
          'active:bg-primary-700',
          'disabled:bg-primary-100 disabled:text-primary-200!',
        ],

        outlined: [
          'border-primary-500 bg-transparent text-primary-500!',
          'hover:border-primary-600 hover:text-primary-600!',
          'active:border-primary-700 active:text-primary-700!',
          'disabled:border-primary-200 disabled:text-primary-200!',
        ],

        text: [
          'border-transparent bg-transparent text-primary-500!',
          'hover:text-primary-600!',
          'active:text-primary-700!',
          'disabled:text-primary-200!',
        ],

        neutral: [
          'border-neutral-100 bg-transparent text-neutral-700!',
          'hover:border-neutral-200 hover:text-neutral-900!',
          'active:border-neutral-950 active:text-neutral-950!',
          'disabled:border-neutral-200 disabled:text-neutral-200!',
        ],

        'neutral-text': [
          'border-transparent bg-transparent text-neutral-700!',
          'hover:text-neutral-900!',
          'active:text-neutral-950!',
          'disabled:text-neutral-200!',
        ],
      },

      size: {
        large: [
          'h-14 px-6',
          'gap-2 text-body-md',
          'has-data-[icon=inline-end]:pe-4',
          'has-data-[icon=inline-start]:ps-4',
          '[&_svg:not([class*="size-"])]:size-6',
        ],

        medium: [
          'h-12 px-6',
          'gap-1.5 text-body-md',
          'has-data-[icon=inline-end]:pe-3',
          'has-data-[icon=inline-start]:ps-3',
          '[&_svg:not([class*="size-"])]:size-6',
        ],

        small: [
          'h-10 px-4',
          'gap-1 text-body-sm',
          'has-data-[icon=inline-end]:pe-2.5',
          'has-data-[icon=inline-start]:ps-2.5',
          '[&_svg:not([class*="size-"])]:size-5',
        ],

        tiny: [
          'h-8 px-3',
          'gap-1 text-body-xs',
          'has-data-[icon=inline-end]:pe-2',
          'has-data-[icon=inline-start]:ps-2',
          '[&_svg:not([class*="size-"])]:size-4',
        ],
      },

      iconOnly: {
        true: 'aspect-square p-0',
        false: null,
      },
    },

    compoundVariants: [
      {
        size: 'large',
        iconOnly: true,
        class: 'size-14',
      },
      {
        size: 'medium',
        iconOnly: true,
        class: 'size-12',
      },
      {
        size: 'small',
        iconOnly: true,
        class: 'size-10',
      },
      {
        size: 'tiny',
        iconOnly: true,
        class: 'size-8',
      },
    ],

    defaultVariants: {
      variant: 'filled',
      size: 'medium',
      iconOnly: false,
    },
  }
);

export interface ButtonProps
  extends React.ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

function Button({
  className,
  variant,
  size,
  iconOnly,
  disabled,
  loading,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      data-slot="button"
      data-icon-only={iconOnly && 'true'}
      disabled={disabled || loading}

      className={cn(
        buttonVariants({
          variant,
          size,
          iconOnly,
        }),
        className,
        loading && 'relative'
      )}
      {...props}
    >
      <span
        className={cn(
          'inline-flex items-center justify-center gap-[inherit]',
          loading && 'invisible'
        )}
      >
        {children}
      </span>
      {loading && <ButtonLoader />}
    </button>
  );
}

export { Button, buttonVariants };
