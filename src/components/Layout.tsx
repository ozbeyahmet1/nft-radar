import { CustomHead } from './Head';
import { IHeadProps } from './Head';
import Navbar from './Navbar';

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
      <Navbar />
    </>
  );
};
