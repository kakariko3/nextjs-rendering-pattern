import { toDate } from 'date-fns';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

import styles from '@/styles/static/Static.module.scss';
import { WorldTimeApi } from '@/types/world-time-api';

export default function Static() {
  const [time, setTime] = useState<Date>();

  async function handleClickButton() {
    const res = await fetch('http://worldtimeapi.org/api/timezone/Asia/Tokyo');
    const data: WorldTimeApi = await res.json();

    setTime(toDate(new Date(data.datetime)));
  }

  return (
    <>
      <Head>
        <title>Staticページ</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <p>Staticページです。</p>
        <div>
          <button onClick={handleClickButton}>時刻を取得</button>
          <span
            className={`ml-[10px] ${time && 'font-semibold text-green-700'}`}
          >
            {time ? time.toString() : '時刻を取得してください。'}
          </span>
        </div>
        <Link href='/'>TOPページへ戻る</Link>
      </main>
    </>
  );
}
