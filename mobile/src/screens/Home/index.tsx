import { useState, useEffect } from 'react';
import {  Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native'
import { styles } from './styles';
import { Heading } from '../../components/Heading';
import { GameCard, GameProps } from '../../components/GameCard';
import { Background } from '../../components/Background';
import { GAMES } from '../../utils/games';
import logoImg from '../../assets/logo-nlw-esports.png'
import { ButtonIcon } from '../../components/ButtonIcon';
import { Lightning } from 'phosphor-react-native';
import { Axios } from '../../services/axios';

export function Home() {
  const navigation = useNavigation()
  const [games, setGames] = useState<GameProps[]>([])

  useEffect(() => {
    Axios.get('/games')
      .then(response => setGames(response.data))
      .catch()
  }, []) 

  function handleCreateDuo(){
    navigation.navigate("createduo", games)
  }

  function handleOpenGame(item: GameProps){
    navigation.navigate('game', item)
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image 
          source={logoImg}
          style={styles.logo}
        />

        <Heading 
          title="Encontre seu duo!"
          subtitle="Selecione o game que deseja jogar..."
        />

        <FlatList 
          data={games.length > 0 ? games : GAMES}
          keyExtractor={game => game.id}
          renderItem={({item}) => (
            <GameCard 
              data={item}
              activeOpacity={0.8}
              onPress={() => handleOpenGame(item)}
            />
          )}
          contentContainerStyle={styles.contentList}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

        <ButtonIcon 
          title="Buscar meu próprio DUO"
          onPress={handleCreateDuo}
          Icon={Lightning}
          height={52}
        />
      </SafeAreaView>
    </Background>
  );
}