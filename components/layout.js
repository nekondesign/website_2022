import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Footer from "../components/Footer";

const name = "ニュース";
export const siteTitle = "ビーコア株式会社";

export default function Layout({ children, home }) {
  return (
    <div className="bg-gray-100">
      <div className="pt-8">
        <div className={styles.container}>
          <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
              name="description"
              content="プレスリリース・イベント情報・その他のお知らせ"
            />
            <meta
              property="og:image"
              content={`https://og-image.vercel.app/${encodeURI(
                siteTitle
              )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
          </Head>
          <header className={styles.header}>
            {home ? (
              <>
                <Image
                  priority
                  src="/images/profile.png"
                  className={utilStyles.borderCircle}
                  height={144}
                  width={144}
                  alt={name}
                />
                <h1 className={utilStyles.heading2Xl}>{name}</h1>
              </>
            ) : (
              <>
                <h2 className={utilStyles.headingLg}>
                  <span className="font-noto text-gray-900">ニュース</span>
                </h2>
              </>
            )}
          </header>
          <main>{children}</main>
          {!home && (
            <div className={styles.backToHome}>
              <Link href="/">
                <a className="text-gray-900 font-ud hover:text-gray-600">
                  ← ホームへ戻る
                </a>
              </Link>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
