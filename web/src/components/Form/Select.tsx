interface SelectProps extends React.HTMLProps<HTMLSelectElement> {
    options: {
        id: string;
        title: string;
    }[]
}
export function Select({options, ...rest}: SelectProps){
    return (
        <select
            className="bg-zinc-900 py-3 px-4 pr-10 rounded text-sm placeholder:text-zinc-500"
            {...rest}
        >
            <option disabled value="">
                Selecione o game que deseja jogar
            </option>
            {
                options?.map((item) => (
                    <option value={item.id} key={item.id}> {item.title}</option>
                ))
            }
        </select>
    )
}