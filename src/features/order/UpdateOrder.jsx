import { updateOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button"
import {useFetcher, useNavigate} from 'react-router-dom'

function UpdateOrder({order}) {
  const navigate = useNavigate()
    const fetcher  = useFetcher();

   
  return (
        <fetcher.Form method='PATCH' className='flex item-center justify-between'>
         <Button type='primary' onClick={() => navigate('/menu')}>Back to Menu</Button>
        <Button type='primary'>Make Priority</Button>
        </fetcher.Form>
  )
}

export default UpdateOrder

export async function action({request , params}){
  const data = {priority : true}
  await updateOrder(params.orderId , data)
 return null
}