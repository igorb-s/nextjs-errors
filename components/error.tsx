import NextLegacyImage from "next/legacy/image";
import NextImage from "next/image";

export const ErrorComponent = ({ book }) => {
  return (
    <>
      <div style={{ border: "1px solid red" }}>
        <NextLegacyImage
          src={book.src}
          width={320}
          height={320}
          layout="fixed"
          alt="sdkjsdksj"
        />
      </div>
      2){" "}
      <div style={{ border: "1px solid red" }}>
        <NextImage src={book.src} width={320} height={320} alt="sdkjsdksj" />
      </div>
    </>
  );
};
