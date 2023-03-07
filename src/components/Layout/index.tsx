import { CustomHead } from '../Head';
import { IHeadProps } from '../Head';
import Navbar from '../Navbar';
import styles from './layout.module.css'

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
            <main className={styles['layout']}>
                <Navbar />
                {children}
            </main>

        </>
    );
};
