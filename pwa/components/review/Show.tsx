import { FunctionComponent, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { fetch } from "../../utils/dataAccess";
import { ReferenceLinks } from "../common/ReferenceLinks";
import { Review } from "../../types/Review";

interface Props {
  review: Review;
}

export const Show: FunctionComponent<Props> = ({ review }) => {
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;

    try {
      await fetch(review["@id"], { method: "DELETE" });
      router.push("/reviews");
    } catch (error) {
      setError("Error when deleting the resource.");
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <Head>
          <title>{`Show Review ${review["@id"]}`}</title>
          <meta
            property="og:title"
            content={`Show Review ${review["@id"]}`}
            key="title"
          />
        </Head>
      </div>
      <h1>{`Show Review ${review["@id"]}`}</h1>
      <table className="table table-responsive table-striped table-hover">
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">rating</th>
            <td>{review["rating"]}</td>
          </tr>
          <tr>
            <th scope="row">body</th>
            <td>{review["body"]}</td>
          </tr>
          <tr>
            <th scope="row">author</th>
            <td>{review["author"]}</td>
          </tr>
          <tr>
            <th scope="row">publicationDate</th>
            <td>{review["publicationDate"]}</td>
          </tr>
          <tr>
            <th scope="row">book</th>
            <td>
              <ReferenceLinks items={review["book"]} type="Book" />
            </td>
          </tr>
        </tbody>
      </table>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <Link href="/reviews">
        <a className="btn btn-primary">Back to list</a>
      </Link>{" "}
      <Link href={`${review["@id"]}/edit`}>
        <a className="btn btn-warning">Edit</a>
      </Link>
      <button className="btn btn-danger" onClick={handleDelete}>
        <a>Delete</a>
      </button>
    </div>
  );
};
