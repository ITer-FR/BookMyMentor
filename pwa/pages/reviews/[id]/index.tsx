import { NextComponentType, NextPageContext } from "next";
import { Show } from "../../../components/review/Show";
import { Review } from "../../../types/Review";
import { fetch } from "../../../utils/dataAccess";

interface Props {
  review: Review;
}

const Page: NextComponentType<NextPageContext, Props, Props> = ({ review }) => {
  return <Show review={review} />;
};

Page.getInitialProps = async ({ asPath }: NextPageContext) => {
  const review = await fetch(asPath);

  return { review };
};

export default Page;
