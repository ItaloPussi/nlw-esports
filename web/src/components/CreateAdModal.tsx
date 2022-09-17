import * as Dialog from '@radix-ui/react-dialog'
import { Check, GameController, Square } from 'phosphor-react'
import { useState } from 'react'
import { CreateAdBanner } from './CreateAdBanner'
import { Input } from './Form/Input'
import { Select } from './Form/Select'

interface CreateAdModalProps {
    games: {
        id: string;
        title: string;
    }[]
}
export function CreateAdModal({games}: CreateAdModalProps){
    const [selectedGameId, setSelectedGameId] = useState("")
    const [name, setName] = useState("")
    const [discord, setDiscord] = useState("")
    const [useVoiceChannel, setUseVoiceChannel] = useState(false)
    const [yearsPlaying, setYearsPlaying] = useState("")
    const [hourStart, setHourStart] = useState("")
    const [hourEnd, setHourEnd] = useState("")

    return (
        <Dialog.Root>
            <CreateAdBanner />
            <Dialog.Portal>
                <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
                <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
                    <Dialog.Title className="text-2xl 2xl:text-3xl font-black">Publique um anúncio</Dialog.Title>
    
                    <form className='mt-8 flex flex-col gap-4'>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="game" className='font-semibold'>Qual o game?</label>
                            <Select 
                                placeholder='Selecione o game que deseja jogar'
                                id="game"
                                options={games}
                                value={selectedGameId}
                                onChange={e => setSelectedGameId(e.currentTarget.value)}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name">Seu nome (ou nickname)</label>
                            <Input 
                                placeholder='Como te chamam dentro do game?'
                                id="name"
                                value={name}
                                onChange={e => setName(e.currentTarget.value)}
                            />
                        </div>
                        <div className='grid grid-cols-2 gap-6'>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                                <Input 
                                    type="number" 
                                    placeholder="Tudo bem ser ZERO..." 
                                    id="yearsPlaying" 
                                    min="0"
                                    value={yearsPlaying}
                                    onChange={e => setYearsPlaying(e.currentTarget.value)}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="discord">Qual o seu discord?</label>
                                <Input 
                                    placeholder="Usuário#0000" 
                                    id="discord" 
                                    value={discord}
                                    onChange={e => setDiscord(e.currentTarget.value)}
                                />
                            </div>
                        </div>
                        <div className='flex gap-6'>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="weekDays">Quando customa jogar?</label>
                                <div className='grid grid-cols-4 gap-2'>
                                    <button 
                                        title="Domingo"
                                        className="w-8 h-8 rounded bg-zinc-900"
                                    >
                                        D
                                    </button>
                                    <button 
                                        title="Segunda"
                                        className="w-8 h-8 rounded bg-zinc-900"
                                    >
                                        S
                                    </button>
                                    <button 
                                        title="Terça"
                                        className="w-8 h-8 rounded bg-zinc-900"
                                    >
                                        T
                                    </button>
                                    <button 
                                        title="Quarta"
                                        className="w-8 h-8 rounded bg-zinc-900"
                                    >
                                        Q
                                    </button>
                                    <button 
                                        title="Quinta"
                                        className="w-8 h-8 rounded bg-zinc-900"
                                    >
                                        Q
                                    </button>
                                    <button 
                                        title="Sexta"
                                        className="w-8 h-8 rounded bg-zinc-900"
                                    >
                                        S
                                    </button>
                                    <button 
                                        title="Sábado"
                                        className="w-8 h-8 rounded bg-zinc-900"
                                    >
                                        S
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 flex-1">
                                <label htmlFor="discord">Qual horário do dia?</label>
                                <div className='flex flex-col items-end gap-2'>
                                    <div className='flex items-center gap-4'>
                                        <label htmlFor="hourStart">De:</label>
                                        <Input 
                                            type="time" 
                                            id="hourStart" 
                                            value={hourStart}
                                            onChange={e => setHourStart(e.currentTarget.value)}
                                        />
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <label htmlFor="hourEnd">Até:</label>
                                        <Input 
                                            type="time" 
                                            placeholder="Até" 
                                            id="hourEnd" 
                                            value={hourEnd}
                                            onChange={e => setHourEnd(e.currentTarget.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='mt-2 flex gap-2 text-sm '>
                            <label className='flex gap-2 cursor-pointer' htmlFor="useVoiceChannel">
                                {useVoiceChannel ? (
                                    <Check 
                                        size={20}
                                        className="bg-zinc-900"
                                    />
                                ) : (
                                    <Square 
                                        size={20}
                                        className="text-zinc-900 bg-zinc-900"
                                    />
                                )}
                                <Input 
                                    type="checkbox" 
                                    id="useVoiceChannel"
                                    className='hidden'
                                    onChange={e => setUseVoiceChannel(e.currentTarget.checked)}
                                />
                                Costumo me conectar ao chat de voz
                            </label>
                        </div>

                        <footer className='mt-4 flex justify-end gap-4'>
                            <Dialog.Close 
                                type="button"
                                className='bg-zinc-500 hover:bg-zinc-600 px-5 h-12 rounded-md font-semibold'
                            >
                                Cancelar
                            </Dialog.Close >
                            <button 
                                type="submit" 
                                className='flex items-center gap-3 bg-violet-500 hover:bg-violet-600 px-5 h-12 rounded-md font-semibold'
                            >
                                <GameController size={24}/>
                                Encontrar DUO
                            </button>
                        </footer>

                    </form>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}