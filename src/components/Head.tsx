import Head from 'next/head';
import React from 'react';

export interface IHeadProps {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
}

export const CustomHead: React.FC<IHeadProps> = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
}) => {
  return (
    <Head>
      {/* Meta tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/logo.svg" />

      {/* Open Graph tags */}
      {/* Open Graph is a technology that allows web pages to become more rich and engaging when shared on social media platforms such as Facebook, Twitter, and LinkedIn. By adding Open Graph meta tags to your web page, you can control how your page appears when it's shared on social media, including the title, description, and image that are displayed. */}
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content="" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={process.env.NEXT_PUBLIC_BASE_URL} />

      {/* Twitter tags */}
      {/* Twitter meta tags are similar to Open Graph tags, but are used specifically for Twitter. They allow you to control how your web page appears when it's shared on Twitter, including the title, description, and image that are displayed. */}
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
    </Head>
  );
};
