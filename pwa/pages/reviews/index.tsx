import { NextComponentType, NextPageContext } from "next";
import { List } from "../../components/review/List";
import { PagedCollection } from "../../types/Collection";
import { Review } from "../../types/Review";
import { fetch } from "../../utils/dataAccess";

interface Props {
  collection: PagedCollection<Review>;
}

const Page: NextComponentType<NextPageContext, Props, Props> = ({
  collection,
}) => <List reviews={collection["hydra:member"]} />;

Page.getInitialProps = async () => {
  const collection = await fetch("/reviews");

  return { collection };
};

export default Page;
