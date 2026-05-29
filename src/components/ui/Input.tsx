type InputProps = {
  type: string
  placeholder: string
  className?: string 
}

export default function Input({
  type,
  placeholder,
  className,
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`placeholder:text-neutral-500' w-full border border-neutral-700 px-4 py-3 text-sm transition outline-none focus:border-black ${className}`}
    />
  )
}
