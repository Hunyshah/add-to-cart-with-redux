import ProductItem from './ProductItem';
import classes from './Products.module.css';

const dummyproducts = [
  {
    id:'e1',
    price:6,
    title:'my first book',
    dis: 'i dont know what should think hahaah'
  },
  {
    id:'e2',
    price:7,
    title:'my second book',
    dis: 'i dont ghahaha know what should think hahaah'
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        { dummyproducts.map((product)=>(
        <ProductItem
          key = {product.id}
          id ={product.id}
          title={product.title}
          price={product.price}
          description={product.dis}
        />))}
      </ul>
    </section>
  );
};

export default Products;
