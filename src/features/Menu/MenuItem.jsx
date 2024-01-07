import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
 const isLoading2 = soldOut === true
  return (
    <li className="flex gap-4 py-2">
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut ? 'grayscale opacity-70' : ''}`} />
      <div className="flex flex-col grow pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">{ingredients.join(', ')}</p>
        <div className="mt-auto flex grow item items-center justify-between">
          {!soldOut ? <p className="text-md font-semibold uppercase">{formatCurrency(unitPrice)}</p> : <p className="text-sm font-medium uppercase text-stone-500">Sold out</p>}
          <Button type='small' disabled={isLoading2}>{soldOut ? "Coming Soon":'ADD TO CART'}</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
