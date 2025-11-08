'use client'

interface LogoSymbolProps {
  size?: number
  className?: string
}

export function LogoSymbol({ size = 24, className = '' }: LogoSymbolProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8 3H6V21H8V13H14C17.3137 13 20 10.3137 20 7C20 3.68629 17.3137 1 14 1H8V3ZM8 3V11H14C16.2091 11 18 9.20914 18 7C18 4.79086 16.2091 3 14 3H8Z"
        fill="#9333EA"
      />
    </svg>
  )
}

export default function Logo() {
  return (
    <h1 className="text-2xl font-bold gradient-text tracking-wide">
      Dark<span className="text-white">UI</span>
    </h1>
  )
}
