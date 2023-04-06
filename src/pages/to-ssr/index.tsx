import Head from 'next/head';
import Link from 'next/link';

import styles from '@/styles/to-static/ToStatic.module.scss';

export default function ToSsr() {
  return (
    <>
      <Head>
        <title>To-SSRページ</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <p>
          下にスクロールしてリンクを表示し、プリフェッチの動作をテストします。
        </p>
        <Link href='/ssr'>SSRページへ移動</Link>
      </main>
    </>
  );
}
