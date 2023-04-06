import { toDate } from 'date-fns';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { initialPageIds } from '@/const/page-ids';
import styles from '@/styles/static/Static.module.scss';
import { WorldTimeApi } from '@/types/world-time-api';

type PathParams = {
  id: string;
};

type Props = {
  id: string;
  worldTime: WorldTimeApi;
};

const Isg: NextPage<Props> = ({ id, worldTime }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>ISGページ</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {router.isFallback ? (
        <main>ページをビルドしています...</main>
      ) : (
        <main className={styles.main}>
          <p>ISGページです。</p>
          <p>
            ID：
            <span className='text-red-700'>{id}</span>
          </p>

          <p>
            <span className='font-normal'>ビルドした時刻：</span>
            <span className='font-semibold text-green-700'>
              {toDate(new Date(worldTime.datetime)).toString()}
            </span>
          </p>

          <Link href='/'>TOPページへ戻る</Link>
        </main>
      )}
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    // paths: [
    //   { params: { id: '1' } },
    //   { params: { id: '2' } },
    //   { params: { id: '3' } },
    // ],
    paths: getPathIds(initialPageIds),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const res = await fetch('http://worldtimeapi.org/api/timezone/Asia/Tokyo');
  const data = await res.json();

  const { id } = params as PathParams;

  return {
    props: {
      id,
      worldTime: data,
    },
  };
};

function getPathIds(ids: string[]) {
  return ids.map((id) => ({ params: { id } }));
}

export default Isg;
