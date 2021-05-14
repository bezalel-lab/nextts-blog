import utilStyles from "../styles/utils.module.css";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { util } from "prettier";


const Learn = () => {
    return (
        <section>
            <section className={`${utilStyles.section}`}>
                <h2 className={utilStyles.headingLg}>主な学習内容</h2>
                <h3 className={`${utilStyles.center} ${utilStyles.h4Small} ${utilStyles.headingM}`}>MDN 「フロントエンドウェブ開発パス」</h3>
                <div className={`${utilStyles.flexContainer}`}>
                    <div className={`${utilStyles.mobileImage} ${utilStyles.flexItem} ${utilStyles.MDNLogo}`}>
                        {/* <Image
                        src="/images/mdn.svg"
                        height={170}
                        width={170}
                        alt="MDN logo" /> */}
                    </div>
                    <div className={`${utilStyles.learnSectDescription} ${utilStyles.flexItem}`}>
                        <ul>
                            <li>ウェブ標準とベストプラクティス</li>
                            <li>HTML / CSS / JavaScript</li>
                            <li>クロスブラウザテストとアクセシビリティ</li>
                            <li>モダンなフロントエンド開発を助けるツール</li>
                        </ul>
                        <p>公式記載の学習時間目安の合計：416~572時間</p>
                </div>
                </div>
            </section>
            <div className={`${utilStyles.learnGrid}`}>
                <section className={`${utilStyles.section} ${utilStyles.nextjs}`}>
                    <h3 className={`${utilStyles.center} ${utilStyles.headingNextjs}`}>Next.js</h3>
                    <div className={`${utilStyles.mobileImage}`}>
                        <Image
                        src="/images/nextjs-black-logo.svg"
                        height={188}
                        width={170}
                        alt="Next.js logo" />
                    </div>
                    <p className={utilStyles.learnSectDescription}>公式ドキュメント全体を学びました。Reactのフレームワークであるため、Reactの公式ドキュメントも全て読み、チュートリアルはどちらも二週しました。</p>
                </section>
                <section className={`${utilStyles.section}  ${utilStyles.typescript}`}>
                    <h3 className={`${utilStyles.center} ${utilStyles.headingM}`}>TypeScript</h3>
                    <div className={`${utilStyles.mobileImage}`}>
                        <Image
                        src="/images/ts-logo-256.png"
                        height={170}
                        width={170}
                        alt="TypeScript logo" />
                    </div>
                    <p className={utilStyles.learnSectDescription}>公式ドキュメントが他より難しく感じたため、Udemyの<Link href="https://www.udemy.com/course/typescript-complete/"><a>「超TypeScript入門 完全パック(2021)」</a></Link>（14時間）で学びました。<br />動画の詳細なノートを取り、参照しながら開発できるようにしました。</p>
                </section>
            </div>
            <section className={`${utilStyles.section}`}>
                <h3 className={`${utilStyles.center} ${utilStyles.h4Small} ${utilStyles.headingM}`}>その他</h3>
                <div className={`${utilStyles.mobileImage}`}>
                    {/* <Image
                    src="/images/ts-logo-256.png"
                    height={170}
                    width={170}
                    alt="MDN logo" /> */}
                </div>
                <ul className={`${utilStyles.learnList} ${utilStyles.learnSectDescription} ${utilStyles.test}`}>
                    <li>本「リーダブルコード」(260pp.)</li>
                    <li>本「入門 コンピュータ科学 ITを支える技術と理論の基礎知識」(608pp.)</li>
                    <li>テストツール（Jest、React Testing Library、Responsivelyなど）</li>
                    <li>YouTube（「しまぶーのIT大学」や「シリコンバレーエンジニア酒井潤チャンネル - シリエン戦隊JUN TV」）</li>
                    <li>Web API（下の「Blog」の記事データは、あえてファイルシステムではなくGitHub APIを使用して取得しています）　など</li>
                </ul>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/zoaIv5ifoPI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                {/* <p>公式ドキュメントが他より難しく感じたため、Udemyの<Link href="https://www.udemy.com/course/typescript-complete/"><a>「超TypeScript入門 完全パック(2021)」</a></Link>（14時間）で学びました。<br />動画の詳細なノートを取り、参照しながら開発できるようにしました。</p> */}
            </section>
            {/* <div className={`${utilStyles.center}`}><iframe width="373.5" height="210" src="https://www.youtube.com/embed/1PczgGb6SV8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div> */}
        </section>
        
    )
}

export default Learn;