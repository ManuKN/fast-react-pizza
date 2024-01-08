import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div className='mt-6 space-y-6'>
      <Link to="/menu" className='text-lg text-green-500 hover:underline'>&larr; Back to menu</Link>
      <p className='text-xl font-bold'>Your cart is still empty. Start adding some pizzas☹️</p>
    </div>
  );
}

export default EmptyCart;
