import { Link } from "react-router-dom"

function Button({children , disabled ,to , type , onClick}) {

const base = 'bg-yellow-400 px-2  text-md font-semibold rounded-full hover:bg-yellow-500 transition-colors duration-300 focus:ring focus:ring-yellow-500 focus:ring-offset-1 disabled:cursor-not-allowed '
const styles = {
  primary : base + ' px-4 py-3 md:px-6 md:py-3 uppercase',
  small : base + 'px-4 py-0 md:px-6 md:py-2.5 text-sm ',
  secondary : 'bg-stone-300 px-3 py-2  text-stone-500 text-md font-semibold rounded-full hover:bg-stone-500 transition-colors duration-300 focus:ring focus:ring-stone-600 hover:text-stone-800 focus:ring-offset-1 disabled:cursor-not-allowed',
  round: base + 'px-2.5 py-1 md:px-4 md:py-2'
}
  if(to) return <Link to={to} className={styles[type]}>{children}</Link>

 if(onClick)
return (
  <button disabled={disabled} className={styles[type]} onClick={onClick}>
    {children}
  </button>
)
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  )
}

export default Button