import { FC, ReactChild } from "react";

interface Props {
  children: ReactChild
};

const PageComponent: FC<Props> = ({children}) => {
  return (
    <div id="page-component">
      {children}
    </div>
  );
}

export default PageComponent;