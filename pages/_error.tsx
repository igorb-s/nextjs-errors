import { ErrorComponent } from "../components/error";



function Error({book}) {
  return <ErrorComponent book={book} />;
}


Error.getInitialProps = async (context) => {
  const book = {
    sizes: "(max-width: 768px) 16px, (max-width: 1200px) 16px, 16px",
    src:
      "https://covers.storytel.com/jpg-640/9789113051253.99f2bc9b-a693-4dc8-af6b-13275c566d2b",
    alt: "",
    layout: "fill",
    objectFit: "cover",
    priority: false,
    loading: "lazy"
  };

  return {book}
}

export default Error


