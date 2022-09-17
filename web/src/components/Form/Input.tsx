import React from "react";

export function Input({...rest}: React.HTMLProps<HTMLInputElement>){
    return (
        <input 
            className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
            {...rest}
        />
    )
}