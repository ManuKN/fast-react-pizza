import { Link } from "react-router-dom"

function Button({children , disabled ,to , type}) {

const base = 'bg-yellow-400 px-2 py-1 text-sm font-semibold rounded-full hover:bg-yellow-500 transition-colors duration-300 focus:ring focus:ring-yellow-500 focus:ring-offset-1 disabled:cursor-not-allowed '
const styles = {
  primary : base + ' px-4 py-3 md:px-6 md:py-3',
  small : base + 'px-4 py-2 md:px-6 md:py-3 text-xs',
  secondary : 'bg-stone-300 px-3 py-2  text-stone-500 text-md font-semibold rounded-full hover:bg-stone-500 transition-colors duration-300 focus:ring focus:ring-stone-600 hover:text-stone-800 focus:ring-offset-1 disabled:cursor-not-allowed'
}
  if(to) return <Link to={to} className={styles[type]}>{children}</Link>
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  )
}

export default Button