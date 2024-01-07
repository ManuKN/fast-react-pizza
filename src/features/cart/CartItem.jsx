import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between space-x-4">
        <p className="text-sm font-semibold">{formatCurrency(totalPrice)}</p>
        <Button type='small'>DELETE</Button>
      </div>
    </li>
  );
}

export default CartItem;
