import { ComponentProps, FC, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "~/utils/cn";

/**
 * TODO: add the docs
 *
 * @since 0.0.1
 */
const variants = cva("vr-px-4 vr-py-3.5 focus:vr-outline-none", {
  variants: {
    variant: {
      solid: "vr-bg-white vr-border-2 vr-border-red-700",
      underline: "vr-bg-white vr-border-b-2 vr-border-red-700",
    },
  },
});

/**
 * TODO: add the docs
 *
 * @since 0.0.1
 */
export type InputProps = ComponentProps<"input"> &
  VariantProps<typeof variants>;

/**
 * TODO: add the docs
 *
 * @since 0.0.1
 */
export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, variant, ...rest } = props;
  return (
    <input
      {...rest}
      ref={ref}
      className={cn(variants({ variant }), className)}
    />
  );
});
