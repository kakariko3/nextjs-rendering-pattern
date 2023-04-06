import Head from 'next/head';
import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';

import styles from '@/styles/to-static/ToStatic.module.scss';

export default function ToIsg() {
  const router = useRouter();
  const [text, setText] = useState<string>('');

  function handleInputText(event: ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  function handleClickButton() {
    router.push(`/isg/${text}`);
  }

  return (
    <>
      <Head>
        <title>To-ISGページ</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <p>
          下にスクロールしてリンクを表示し、プリフェッチの動作をテストします。
        </p>
        <div>
          <input
            type='text'
            value={text}
            onChange={handleInputText}
            className='mr-[4px] border-[1px] border-gray-400'
          />
          <button onClick={handleClickButton}>ISGページへ移動</button>
        </div>
      </main>
    </>
  );
}
