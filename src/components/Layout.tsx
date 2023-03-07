import { CustomHead } from './Head';
import { IHeadProps } from './Head';

type ILayoutProps = {
  children: React.ReactNode;
  headProps: IHeadProps;
};

export const CustomLayout: React.FC<ILayoutProps> = ({
  children,
  headProps,
}) => {
  return (
    <>
      <CustomHead {...headProps} />
      <main>{children}</main>
    </>
  );
};
