import { ComponentProps, FC } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "~/utils/cn";

/**
 * @internal
 * @since 0.0.1
 */
const variants = cva("vr-px-4 vr-py-3.5 vr-font-bold focus:vr-outline-none", {
  variants: {
    variant: {
      solid: "vr-bg-red-600 hover:vr-bg-red-700 vr-text-white",
      outline:
        "vr-bg-white vr-border-2 vr-border-red-700 vr-text-red-700 hover:vr-bg-red-700 hover:vr-text-white",
    },
    disabled: {
      true: "disabled",
      false: "not-disabled",
    },
  },
  defaultVariants: {
    variant: "solid",
    disabled: false,
  },
});

/**
 * TODO: add the docs
 *
 * @since 0.0.1
 */
export type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof variants>;

/**
 * TODO: add the docs
 *
 * @since 0.0.1
 */
export const Button: FC<ButtonProps> = (props) => {
  const { className, variant, ...rest } = props;

  return <button {...rest} className={cn(variants({ variant }), className)} />;
};
