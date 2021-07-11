import { Catalog } from '../components/Catalog';
import { Cart } from '../components/Cart';

export default function Home(): JSX.Element {
  return (
    <>
      <Catalog />
      <Cart />
    </>
  );
}
