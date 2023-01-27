export default function Button(props) {
  const { children, ...rest } = props
  return (
    <button
      {...rest}
      className="border-2 border-gray-700 p-4 uppercase text-sm hover:bg-orange-500 hover:text-white hover:border-orange-500"
    >
      {children}
    </button>
  )
}
