/** Add your relevant code here for the issue to reproduce */
function PageWithError() {
  return <div>skdsdjsj</div>;
}

export const getServerSideProps = () => {
  throw new Error("Trigger an error");
};

export default PageWithError;
