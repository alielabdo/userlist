
const Button = ({color,bgColor,size,children}) => {
  return (
    <button type="button" className={`text-${color} bg-${bgColor} text-${size} rounded-md p-2`}>
      {children}
    </button>
  )
}

export default Button