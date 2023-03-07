import { IHeadProps } from '@/components/Head';
import { CustomLayout } from '@/components/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {
  const homepageHeadProps: IHeadProps = {
    title: 'Homepage',
    description: '',
    keywords: '',
    ogDescription: '',
    ogTitle: '',
  };

  return <CustomLayout headProps={homepageHeadProps}></CustomLayout>;
}
