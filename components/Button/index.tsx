type ButtonProps = {
    children: React.ReactNode 
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({children, className}:ButtonProps){
    return(
        <button
            className={`bg-[var(--primary)] bg-opacity-10 px-[32px] py-[12px] rounded-[8px] text-white ${className}`}
        >{children}</button>
    )
}