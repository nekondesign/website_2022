import Head from "next/head";
import Navbar2 from "../../components/job-content/Navbar2";
import Herosolutions from "../../components/job-content/Herosolutions";
import Contentsolutions from "../../components/job-content/Contentsolutions";
import Featuressolutions from "../../components/job-content/Featuressolutions";
import Footer from "../../components/Footer";
import { NextSeo } from "next-seo";

export default function Solutions() {
  return (
    <div className="">
      <>
        <NextSeo
          title="ビーコア株式会社"
          description="現場のニッチなお悩みをIoTの力で解決します"
          openGraph={{
            url: "https://www.bcore.biz/job/solutions",
            title: "提供するソリューション",
            description:
              "ビーコアが提供する各ソリューションの特徴などを知ることができます。",
            images: [
              {
                url: "https://bcore.biz/images/SEO/job-seo-image.png",
                width: 800,
                height: 420,
                alt: "採用情報イメージ",
                type: "image/png",
              },
              //   {
              //     url: "https://bcore.biz/images/SEO/mission-card.png",
              //     width: 900,
              //     height: 800,
              //     alt: "ポリシーイメージ",
              //     type: "large_image/png",
              //   },
            ],
            site_name: "",
          }}
          twitter={{
            handle: "colorbit_bcore",
            site: "https://twitter.com/colorbit_bcore",
            cardType: "summary_large_image",
          }}
        />
      </>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar2 />
      <Herosolutions />
      <Contentsolutions />
      <Featuressolutions />
      <Footer />
    </div>
  );
}
