export interface GameProps {
    id: string;
    title: string;
    bannerUrl: string;
    _count: {
        ads: number;
    }
}

interface GameCardProps {
    data: GameProps;
}

export function GameCard({data}: GameCardProps){
    return (
        <a href="#" className="relative rounded-lg overflow-hidden hover:opacity-70">
            <img src={data.bannerUrl} alt={`${data.title} image`} className="w-40 2xl:w-60" />

            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
                <strong className="font-bold text-white block">{data.title}</strong>
                <span className="text-zinc-300 text-sm block">{data._count.ads} anúncio{data._count.ads != 1 && "s"}</span>
            </div>
        </a>
    )
}