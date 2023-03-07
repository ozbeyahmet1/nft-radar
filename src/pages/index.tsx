import { IHeadProps } from '@/components/Head';
import { CustomLayout } from '@/components/Layout';

export default function Home() {
  const homepageHeadProps: IHeadProps = {
    title: 'Homepage',
    description: '',
    keywords: '',
    ogDescription: '',
    ogTitle: '',
  };

  return (
    <CustomLayout headProps={homepageHeadProps}>General Layout</CustomLayout>
  );
}
