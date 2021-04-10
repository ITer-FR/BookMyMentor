import { NextComponentType, NextPageContext } from "next";
import { Form } from "../../../components/review/Form";
import { Review } from "../../../types/Review";
import { fetch } from "../../../utils/dataAccess";

interface Props {
  review: Review;
}

const Page: NextComponentType<NextPageContext, Props, Props> = ({ review }) => {
  return <Form review={review} />;
};

Page.getInitialProps = async ({ asPath }: NextPageContext) => {
  const review = await fetch(asPath.replace("/edit", ""));

  return { review };
};

export default Page;
