type ButtonProps = {
    children: React.ReactNode 
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({children, className}:ButtonProps){
    return(
        <button
            className={`bg-primary px-6 py-2 rounded-sm text-white ${className}`}
        >{children}</button>
    )
}