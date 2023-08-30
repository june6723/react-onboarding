import { Button } from "@parte-ds/ui";
import { useQuery } from "@tanstack/react-query";
import useBill from "../Bills/useBillContext";
import ProductItem from "../ProductItem";

const getCoffees = () => fetch("/api/coffees").then((res) => res.json());

const ProductList = () => {
  const { data: coffees, refetch } = useQuery<Product[]>({ queryFn: getCoffees, refetchOnReconnect: false, retry: false });
  const [_, dispatch] = useBill();
  return (
    <>
      {coffees?.map((product) => (
        <ProductItem key={product.id} product={product} onClick={(product) => dispatch({ type: "add_product", product })} />
      ))}
      <Button onClick={() => refetch()}>Refetch</Button>
    </>
  );
};
export default ProductList;
