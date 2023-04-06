import Head from 'next/head';
import Link from 'next/link';
import { ChangeEvent, useState } from 'react';

import { useIsgPageIdStore } from '@/stores/isg-page-id';
import styles from '@/styles/to-static/ToStatic.module.scss';

export default function ToIsg() {
  const pageIds = useIsgPageIdStore((state) => state.pageIds);
  const addPageId = useIsgPageIdStore((state) => state.addPageId);

  const [id, setId] = useState<string>('');
  // const [pageIds, setPageIds] = useState<string[]>(initialPageIds);

  function handleInputText(event: ChangeEvent<HTMLInputElement>) {
    setId(event.target.value);
  }

  function handleClickButton() {
    // setPageIds((prev) => [...prev, text]);
    addPageId(id);
    setId('');
  }

  return (
    <>
      <Head>
        <title>To-ISGページ</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <div>
          <p>
            下にスクロールしてリンクを表示し、プリフェッチの動作をテストします。
          </p>
          <div className='mt-[30px]'>
            <input
              type='text'
              value={id}
              placeholder='ID'
              onChange={handleInputText}
              className='mr-[4px] border-[1px] border-gray-400 px-[4px]'
            />
            <button onClick={handleClickButton}>ISGページを追加</button>
          </div>
        </div>
        <div className='flex flex-col gap-[20px]'>
          {pageIds.map((id) => (
            <Link key={id} href={`/isg/${id}`}>
              {id}ページへ移動
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
