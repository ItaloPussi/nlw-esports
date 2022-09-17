import {useEffect, useState} from 'react'
import './styles/main.css'
import logoImg from './assets/logo-nlw-esports.svg'
import { GameCard, GameProps } from './components/GameCard'
import { CreateAdModal } from './components/CreateAdModal'
import { CreateAdBanner } from './components/CreateAdBanner'
import { Root } from '@radix-ui/react-dialog'
import axios from 'axios'

function App() {
  const [games, setGames] = useState<GameProps[]>([])

  useEffect(() => {
    axios("http://192.168.0.28:3333/games")
    .then(response => setGames(response.data))
  }, [])
  return (
    <div className='max-w-[1344px] mx-auto flex items-center flex-col my-5 2xl:my-20'>
      <img src={logoImg} alt="NLW eSports" className='h-36 2xl:h-40' />

      <h1 className="text-5xl 2xl:text-6xl text-white font-black mt-5 2xl:mt-20">
        Seu 
        <span className="bg-nlw-gradient bg-clip-text text-transparent"> duo </span>
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-4 2xl:gap-6 mt-8 2xl:mt-16">
        {games.map((game) => (
          <GameCard data={game} key={game.id}/>
        ))}
      </div>

      <Root>
        <CreateAdBanner />
        <CreateAdModal games={games}/>
      </Root>
      

    </div>
  )
}

export default App
