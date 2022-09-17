interface GameProps {
    id: string;
    name: string;
    cover: string;
    ads: string;
}

interface GameCardProps {
    data: GameProps;
}

export function GameCard({data}: GameCardProps){
    return (
        <a href="#" className="relative rounded-lg overflow-hidden hover:opacity-70">
            <img src={data.cover} alt={`${data.name} image`} />

            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
                <strong className="font-bold text-white block">{data.name}</strong>
                <span className="text-zinc-300 text-sm block">{data.ads} anúncios</span>
            </div>
        </a>
    )
}