import { ReactElement, ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
}

export default function Container({
  children,
  className,
}: IProps): ReactElement {
  return (
    <div className={`max-w-[1200px] mx-auto w-full ${className}`}>{children}</div>
  );
}

Container.defaultProps = {
  className: "",
};
