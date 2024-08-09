type Props = {
  product: ProductType;
};
const Product = ({ product }: Props) => {
  const imgUrl = new URL(
    `../../public/images/${product.sku}.jpg`,
    import.meta.url
  ).href;
  console.log(imgUrl);
  const content = (
    <article className='flex flex-col gap-2 rounded-md overflow-hidden'>
      <img
        src={imgUrl}
        alt={product.name}
      />
      <div className='mx-3 flex items-center justify-between'>
        <div>
          <h3 className='font-medium text-xl text-emerald-700'>
            {product.name}
          </h3>
          <p>
            {Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "pkr",
            }).format(product.price)}
          </p>
        </div>
        <button className='bg-emerald-600 rounded px-4 py-2 text-white'>
          Add to cart
        </button>
      </div>
    </article>
  );
  return content;
};
export default Product;
