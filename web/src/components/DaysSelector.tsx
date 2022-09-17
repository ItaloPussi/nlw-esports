import * as ToggleGroup from '@radix-ui/react-toggle-group'

interface DaysSelectorProps {
    daysSelected: string[];
    setDaysSelected: (daysSelected: string[]) => void;
}

export function DaysSelector({daysSelected, setDaysSelected}: DaysSelectorProps){

    return (
        <ToggleGroup.Root 
            type='multiple' className='grid grid-cols-4 gap-2'
            onValueChange={setDaysSelected}
            value={daysSelected}
        >
            <ToggleGroup.Item 
                value="0"
                title="Domingo"
                className={`w-8 h-8 rounded ${daysSelected.includes("0") ? 'bg-violet-500' : 'bg-zinc-900'}`}
            >
                D
            </ToggleGroup.Item>
            <ToggleGroup.Item 
                value="1"
                title="Segunda"
                className={`w-8 h-8 rounded ${daysSelected.includes("1") ? 'bg-violet-500' : 'bg-zinc-900'}`}
            >
                S
            </ToggleGroup.Item>
            <ToggleGroup.Item
                value="2"
                title="Terça"
                className={`w-8 h-8 rounded ${daysSelected.includes("2") ? 'bg-violet-500' : 'bg-zinc-900'}`}
            >
                T
            </ToggleGroup.Item>
            <ToggleGroup.Item
                value="3"
                title="Quarta"
                className={`w-8 h-8 rounded ${daysSelected.includes("3") ? 'bg-violet-500' : 'bg-zinc-900'}`}
            >
                Q
            </ToggleGroup.Item>
            <ToggleGroup.Item
                value="4" 
                title="Quinta"
                className={`w-8 h-8 rounded ${daysSelected.includes("4") ? 'bg-violet-500' : 'bg-zinc-900'}`}
            >
                Q
            </ToggleGroup.Item>
            <ToggleGroup.Item
                value="5" 
                title="Sexta"
                className={`w-8 h-8 rounded ${daysSelected.includes("5") ? 'bg-violet-500' : 'bg-zinc-900'}`}
            >
                S
            </ToggleGroup.Item>
            <ToggleGroup.Item
                value="6" 
                title="Sábado"
                className={`w-8 h-8 rounded ${daysSelected.includes("6") ? 'bg-violet-500' : 'bg-zinc-900'}`}
            >
                S
            </ToggleGroup.Item>
        </ToggleGroup.Root>
    )
}