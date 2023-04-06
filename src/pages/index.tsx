import Head from 'next/head';
import Link from 'next/link';

import styles from '@/styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>TOPページ</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <Link href='/to-static'>[Static] テストページ</Link>
        <Link href='/to-ssg'>[SSG] テストページ</Link>
        <Link href='/to-ssr'>[SSR] テストページ</Link>

        <hr className='w-full border-gray-400' />

        <Link href='/to-isg'>[ISG] テストページ</Link>
        <Link href='/to-isr'>[ISR] テストページ</Link>

        <hr className='w-full border-gray-400' />

        <Link href='/to-isg-isr'>[ISG+ISR] テストページ</Link>
      </main>
    </>
  );
}
