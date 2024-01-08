import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getCartItemquanity } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/updateItemQuantity";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
 const isLoading2 = soldOut === true
const dispatch = useDispatch()
const itemQuantity = useSelector(getCartItemquanity(id))
const isInCart = itemQuantity > 0

 function handleAddcart(){
 const newItem = {
      pizzaId:id,
      name,
      quantity : 1,
      unitPrice,
      totalPrice : unitPrice*1,
  }
 dispatch(addItem(newItem))
 }
  return (
    <li className="flex gap-4 py-2">
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut ? 'grayscale opacity-70' : ''}`} />
      <div className="flex flex-col grow pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">{ingredients.join(', ')}</p>
        <div className="mt-auto flex grow item items-center justify-between">
          {!soldOut ? <p className="text-md font-semibold uppercase">{formatCurrency(unitPrice)}</p> : <p className="text-sm font-medium uppercase text-stone-500">Sold out</p>}
          {isInCart && <div className="flex gap-4 sm:gap-10"> 
            <UpdateItemQuantity pizzaId={id} currentQuantity={itemQuantity} />
            <DeleteItem pizzaId={id}>DELETE</DeleteItem>
            </div>}
          {!soldOut && !isInCart && <Button type='small' disabled={isLoading2} onClick={handleAddcart}>{soldOut ? "Coming Soon":'ADD TO CART'}</Button>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
