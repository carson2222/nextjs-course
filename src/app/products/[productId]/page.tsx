import { Metadata } from "next";

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.productId}`,
  };
};

export default function ProductDetails({ params }: Props) {
  return <h1>Details product description {params.productId}</h1>;
}
type Props = {
  params: { productId: string };
};
