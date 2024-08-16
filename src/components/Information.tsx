import type { ReactNode } from "react";

export type InformationProps = {
  children: ReactNode;
};

export const Information = (props: InformationProps) => {
  return (
    <p className="bg-secondary/10 border-l-solid border-l-2 p-4 border-secondary text-lg">
      <span aria-label="A bulb">💡</span> {props.children}
    </p>
  );
};
