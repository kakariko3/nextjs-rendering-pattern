import { toDate } from 'date-fns';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import styles from '@/styles/static/Static.module.scss';
import { WorldTimeApi } from '@/types/world-time-api';

type Props = {
  worldTime: WorldTimeApi;
};

const Ssg: NextPage<Props> = ({ worldTime }) => {
  return (
    <>
      <Head>
        <title>SSGページ</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <p>SSGページです。</p>

        <p>
          <span className='font-normal'>ビルドした時刻：</span>
          <span className='font-semibold text-green-700'>
            {toDate(new Date(worldTime.datetime)).toString()}
          </span>
        </p>

        <Link href='/'>TOPページへ戻る</Link>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await fetch('https://worldtimeapi.org/api/timezone/Asia/Tokyo');
  const data = await res.json();

  return {
    props: {
      worldTime: data,
    },
  };
};

export default Ssg;
