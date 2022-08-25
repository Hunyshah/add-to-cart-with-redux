import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';
function App() {

  const viewcart = useSelector(state => state.ui.cartIsvisible)
  return (
    <Layout>
      {viewcart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
