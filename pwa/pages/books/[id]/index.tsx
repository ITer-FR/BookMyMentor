import { NextComponentType, NextPageContext } from "next";
import { Show } from "../../../components/book/Show";
import { Book } from "../../../types/Book";
import { fetch } from "../../../utils/dataAccess";

interface Props {
  book: Book;
}

const Page: NextComponentType<NextPageContext, Props, Props> = ({ book }) => {
  return <Show book={book} />;
};

Page.getInitialProps = async ({ asPath }: NextPageContext) => {
  const book = await fetch(asPath);

  return { book };
};

export default Page;
