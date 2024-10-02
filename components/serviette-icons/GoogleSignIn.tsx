import * as React from "react"

function SvgComponent(props:any) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.5 10.211c0-.781-.065-1.351-.205-1.942h-9.101v3.525h5.342c-.107.877-.69 2.196-1.982 3.083l-.018.118 2.878 2.184.2.02c1.83-1.657 2.886-4.096 2.886-6.988z"
        fill="#4285F4"
      />
      <path
        d="M10.194 19.5c2.617 0 4.814-.845 6.42-2.301l-3.06-2.322c-.818.56-1.917.95-3.36.95a5.825 5.825 0 01-5.515-3.948l-.114.01-2.992 2.269-.039.106c1.594 3.104 4.868 5.236 8.66 5.236z"
        fill="#34A853"
      />
      <path
        d="M4.68 11.879A5.743 5.743 0 014.355 10c0-.654.118-1.288.312-1.879l-.005-.126-3.03-2.306-.099.047A9.354 9.354 0 00.5 10c0 1.53.377 2.977 1.034 4.264l3.145-2.385z"
        fill="#FBBC05"
      />
      <path
        d="M10.194 4.173c1.82 0 3.048.77 3.748 1.415l2.736-2.618C14.998 1.44 12.811.5 10.194.5c-3.792 0-7.066 2.132-8.66 5.236L4.668 8.12a5.849 5.849 0 015.526-3.948z"
        fill="#EB4335"
      />
    </svg>
  )
}

export default SvgComponent
