import { notFound } from "next/navigation";

export default function ReviewDetail({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  throw new Error("Error loading review");
  if (+params.reviewId > 100) {
    notFound();
  }

  return (
    <h1>
      Product {params.productId} for product {params.reviewId}
    </h1>
  );
}
