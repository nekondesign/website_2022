import Image from "next/image";

export default function Image_2() {
  return (
    <div className="">
      <Image
        className=""
        src="/images/Blog/2023-0407/kabuki.png" // Route of the image file
        height={918} // Desired size with correct aspect ratio
        width={2015} // Desired size with correct aspect ratio
        alt="三月大歌舞伎【花の御所始末】"
      />
      <p className="text-right font-ud lg:text-base text-gray-700 md:text-xs sm:text-sm">
        写真引用元：松竹株式会社
      </p>
    </div>
  );
}
