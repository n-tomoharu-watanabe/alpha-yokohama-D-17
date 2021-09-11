export const SideButton = (
  { children, disabled, ...props }: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
) => {
  return (
    <button className={`
      w-8 lg:w-14 h-8 lg:h-14 m-2 text-base lg:text-4xl 
      rounded-full bg-gray-600 shadow-md 
      ${disabled ? (
        `hover:bg-gray-600 text-gray-500 cursor-default`
      ) : (
        `hover:bg-gray-500 text-white`
      )}
    `} {...props} disabled={disabled}>{children}</button>
  )
}