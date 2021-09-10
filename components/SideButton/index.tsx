export const SideButton = (
  { children, ...props }: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
) => {
  return (
    // 有効用: hover:bg-gray-500 text-white
    <button className="
      w-8 lg:w-12 h-8 lg:h-12 m-2 text-base lg:text-4xl 
      rounded-full bg-gray-600 shadow-md 
      hover:bg-gray-600 text-gray-500 cursor-default
    " {...props} disabled>{children}</button>
  )
}