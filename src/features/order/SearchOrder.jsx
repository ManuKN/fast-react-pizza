import { useState } from "react"
import {useNavigate } from "react-router-dom";

function SearchOrder() {
    const[query , setQuery] = useState('')
    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault();
        if(!query) return;
        navigate(`/order/${query}`)
        setQuery('')
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input placeholder="Search order #" value={query} onChange={e =>setQuery(e.target.value)} />
            {/* <button>Submit</button> */}
        </form>
    </div>
  )
}

export default SearchOrder