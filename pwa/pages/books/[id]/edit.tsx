import { NextComponentType, NextPageContext } from "next";
import { Form } from "../../../components/book/Form";
import { Book } from "../../../types/Book";
import { fetch } from "../../../utils/dataAccess";

interface Props {
  book: Book;
}

const Page: NextComponentType<NextPageContext, Props, Props> = ({ book }) => {
  return <Form book={book} />;
};

Page.getInitialProps = async ({ asPath }: NextPageContext) => {
  const book = await fetch(asPath.replace("/edit", ""));

  return { book };
};

export default Page;
