import utilStyles from '../styles/utils.module.css';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { util } from 'prettier';

const Learn = () => {
  return (
    <section>
      <section className={`${utilStyles.section}`}>
        <h2 className={utilStyles.headingLg}>主な学習内容</h2>
        <h3
          className={`${utilStyles.center} ${utilStyles.h4Small} ${utilStyles.headingM}`}
        >
          <Link href="https://developer.mozilla.org/ja/docs/Learn/Front-end_web_developer">
            <a>MDN 「フロントエンドウェブ開発パス」</a>
          </Link>
        </h3>
        <div className={`${utilStyles.flexContainer}`}>
          <div
            className={`${utilStyles.logoSize} ${utilStyles.MDNAlternativeImg}`}
          >
            
            <Image
              src="/images/MDNAlternativeImg2.jpg" //ToDo 許可の有無を確認してから、よければファイル名のnを一つ取り除く
              height={190}
              width={340}
              alt="Learning web development"
            />
          </div>
          <div className={`${utilStyles.learnSectMDNDescription}`}>
            <div>
              <ul>
                <li className={`${utilStyles.learnList}`}>
                  ウェブ標準とベストプラクティス
                </li>
                <li className={`${utilStyles.learnList}`}>
                  HTML / CSS / JavaScript
                </li>
                <li className={`${utilStyles.learnList}`}>
                  クロスブラウザテストとアクセシビリティ
                </li>
                <li className={`${utilStyles.learnList}`}>
                  モダンなフロントエンド開発を助けるツール
                </li>
              </ul>
              <p className={`${utilStyles.toRight}`}>
                公式記載の学習時間目安の合計：416~572時間
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className={`${utilStyles.learnGrid}`}>
        <section className={`${utilStyles.section} ${utilStyles.nextjs}`}>
          <h3 className={`${utilStyles.center} ${utilStyles.headingNextjs}`}>
            Next.js
          </h3>
          <Link href="https://vercel.com/design/nextjs">
            <a>
              <div className={`${utilStyles.logoSize}`}>
                <Image
                  src="/images/nextjs-black-logo.svg"
                  height={188}
                  width={170}
                  alt="Next.js logo"
                />
              </div>
            </a>
          </Link>
          <p className={utilStyles.learnSectDescription}>
            <Link href="https://nextjs.org/">
              <a>公式ドキュメント</a>
            </Link>
            全体を学びました。Reactのフレームワークであるため、Reactの公式ドキュメントも全て読み、チュートリアルはどちらも二週しました。
          </p>
        </section>
        <section className={`${utilStyles.section}  ${utilStyles.typescript}`}>
          <h3 className={`${utilStyles.center} ${utilStyles.headingM}`}>
            TypeScript
          </h3>
          <Link href="https://www.typescriptlang.org/branding/">
            <a>
              <div className={`${utilStyles.logoSize} ${utilStyles.tsLogo}`}>
                <Image
                  src="/images/ts-logo-256.png"
                  height={160}
                  width={160}
                  alt="TypeScript logo"
                />
              </div>
            </a>
          </Link>

          <p className={utilStyles.learnSectDescription}>
            Udemyの
            <Link href="https://www.udemy.com/course/typescript-complete/">
              <a>「超TypeScript入門 完全パック(2021)」</a>
            </Link>
            （14時間）で学びました。
            <br />
            動画の詳細なノートを取り、参照しながら開発できるようにしました。
          </p>
        </section>
      </div>
      <section className={`${utilStyles.section}`}>
        <h3
          className={`${utilStyles.center} ${utilStyles.h4Small} ${utilStyles.headingM}`}
        >
          その他
        </h3>
        <div
          className={`${utilStyles.flexContainer} ${utilStyles.othersFlexContainer}`}
        >
          <div className={`${utilStyles.videoWrapper}`}>
            <iframe
              src="https://www.youtube.com/embed/zoaIv5ifoPI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={`${utilStyles.video}`}
            ></iframe>
          </div>
          <ul
            className={`${utilStyles.learnList} ${utilStyles.learnSectDescription}`}
          >
            <li className={`${utilStyles.learnList}`}>
              本「
              <Link href="https://www.amazon.co.jp/%E3%83%AA%E3%83%BC%E3%83%80%E3%83%96%E3%83%AB%E3%82%B3%E3%83%BC%E3%83%89-%E2%80%95%E3%82%88%E3%82%8A%E8%89%AF%E3%81%84%E3%82%B3%E3%83%BC%E3%83%89%E3%82%92%E6%9B%B8%E3%81%8F%E3%81%9F%E3%82%81%E3%81%AE%E3%82%B7%E3%83%B3%E3%83%97%E3%83%AB%E3%81%A7%E5%AE%9F%E8%B7%B5%E7%9A%84%E3%81%AA%E3%83%86%E3%82%AF%E3%83%8B%E3%83%83%E3%82%AF-Theory-practice-Boswell/dp/4873115655">
                <a>リーダブルコード</a>
              </Link>
              」(260pp.)
            </li>
            <li className={`${utilStyles.learnList}`}>
              本「
              <Link href="https://www.amazon.co.jp/%E5%85%A5%E9%96%80-%E3%82%B3%E3%83%B3%E3%83%94%E3%83%A5%E3%83%BC%E3%82%BF%E7%A7%91%E5%AD%A6-IT%E3%82%92%E6%94%AF%E3%81%88%E3%82%8B%E6%8A%80%E8%A1%93%E3%81%A8%E7%90%86%E8%AB%96%E3%81%AE%E5%9F%BA%E7%A4%8E%E7%9F%A5%E8%AD%98-Glenn-Brookshear/dp/4048869574">
                <a>入門 コンピュータ科学 ITを支える技術と理論の基礎知識</a>
              </Link>
              」(608pp.)
            </li>
            <li className={`${utilStyles.learnList}`}>
              テストツール（Jest、React Testing Library、Responsivelyなど）
            </li>
            <li className={`${utilStyles.learnList}`}>
              YouTube（役立つツールやエンジニア界隈の情報）
            </li>
            <li className={`${utilStyles.learnList}`}>
              Web API（下の「Blog」の記事データ取得にGitHub APIを使用）　など
            </li>
          </ul>
        </div>
        {/* <p>公式ドキュメントが他より難しく感じたため、Udemyの<Link href="https://www.udemy.com/course/typescript-complete/"><a>「超TypeScript入門 完全パック(2021)」</a></Link>（14時間）で学びました。<br />動画の詳細なノートを取り、参照しながら開発できるようにしました。</p> */}
      </section>
      {/* <div className={`${utilStyles.center}`}><iframe width="373.5" height="210" src="https://www.youtube.com/embed/1PczgGb6SV8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div> */}
    </section>
  );
};

export default Learn;
