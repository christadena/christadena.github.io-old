import "./ReadDocs.css";

type ReadDocsProps = {
  message: string;
};

const ReadDocs = (props: ReadDocsProps) => {
  const message = props.message;

  return <p>{message}</p>;
};

export default ReadDocs;
