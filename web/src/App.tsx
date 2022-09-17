import './styles/main.css'
import logoImg from './assets/logo-nlw-esports.svg'
import { GameCard } from './components/GameCard'
import { MagnifyingGlassPlus } from 'phosphor-react'

function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex items-center flex-col my-5 2xl:my-20'>
      <img src={logoImg} alt="NLW eSports" className='h-36 2xl:h-40' />

      <h1 className="text-5xl 2xl:text-6xl text-white font-black mt-5 2xl:mt-20">
        Seu 
        <span className="bg-nlw-gradient bg-clip-text text-transparent"> duo </span>
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-4 2xl:gap-6 mt-8 2xl:mt-16">
        <GameCard data={{id: '1', name: 'League of Legends', cover: '/game-1.png', ads: '4'}} />
        <GameCard data={{id: '2', name: 'Dota 2', cover: '/game-2.png', ads: '1'}} />
        <GameCard data={{id: '3', name: 'Counter Strike', cover: '/game-3.png', ads: '6'}} />
        <GameCard data={{id: '4', name: 'Apex Legends', cover: '/game-4.png', ads: '0'}} />
        <GameCard data={{id: '5', name: 'Fortnite', cover: '/game-5.png', ads: '2'}} />
        <GameCard data={{id: '6', name: 'World of Warcraft', cover: '/game-6.png', ads: '3'}} />
      </div>

     <div className="mx-12 2xl:mx-0 mt-6 2xl:mt-8 pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden">
        <div className='bg-[#2a2634] px-8 py-6 flex justify-between items-center'>
          <div>
            <strong className="text-2xl text-white font-black block">Não encontrou seu duo?</strong>
            <span className="text-zinc-400">Publique um anúncio para encontrar novos players!</span>
          </div>

          <button className="py-4 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
            <MagnifyingGlassPlus 
              size={24}
            />
            Publicar anúncio
          </button>
        </div>
     </div>
    </div>
  )
}

export default App
