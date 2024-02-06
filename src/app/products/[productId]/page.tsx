export default function ProductDetails({ params }: { params: { productId: string } }) {
  return <h1>Details product description {params.productId}</h1>;
}
