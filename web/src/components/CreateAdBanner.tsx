import { MagnifyingGlassPlus } from "phosphor-react";
import { DialogTrigger} from '@radix-ui/react-dialog'

export function CreateAdBanner(){
    return (
    <div className="mx-12 2xl:mx-0 mt-5 2xl:mt-8 pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden">
        <div className='bg-[#2a2634] px-8 py-6 flex justify-between items-center'>
            <div>
            <strong className="text-2xl 2xl:text-2xl text-white font-black block">Não encontrou seu duo?</strong>
            <span className="text-zinc-400">Publique um anúncio para encontrar novos players!</span>
            </div>

            <DialogTrigger className="py-4 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
                <MagnifyingGlassPlus 
                    size={24}
                />
                Publicar anúncio
            </DialogTrigger>
        </div>
    </div>
    )
}