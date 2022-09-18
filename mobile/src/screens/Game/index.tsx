import { useState, useEffect } from 'react';
import { SafeAreaView, Image, FlatList, Text } from 'react-native';
import { useRoute } from '@react-navigation/native'

import { Background } from '../../components/Background';
import { styles } from './styles';
import { GameProps } from '../../components/GameCard';
import { Heading } from '../../components/Heading';
import { AdProps, DuoCard } from '../../components/DuoCard';
import { DuoMatch } from '../../components/DuoMatch';
import { Header } from '../../components/Header';

export function Game() {
  const route = useRoute()
  const game = route.params as GameProps

  const [ads, setAds] = useState<AdProps[]>([])

  const [selectedAdDiscord, setSelectedAdDiscord] = useState("")
  const [showDiscordModal, setShowDiscordModal] = useState(false)
  
  async function openDiscordModal(adId: string){
    fetch(`http://192.168.0.28:3333/ads/${adId}/discord`)
    .then(data => data.json())
    .catch(err => console.log(err))
    .then(data => {
      setSelectedAdDiscord(data.discord)
      setShowDiscordModal(true)
    })
  }

  function closeDiscordModal(){
    setSelectedAdDiscord("")
    setShowDiscordModal(false)
  }

  useEffect(() => {
    if(!game) return

    fetch(`http://192.168.0.28:3333/games/${game.id}/ads`)
      .then(response => response.json())
      .catch()
      .then(data => setAds(data))
  }, [game])

  return (
    <Background>
        <SafeAreaView style={styles.container}>
          
          <Header />

          <Image 
            source={game.bannerUrl ? {uri: game.bannerUrl} : game.cover}
            style={styles.cover}
            resizeMode="cover"
          />
          
          <Heading 
            title={game.title}
            subtitle="Conecte-se e comece a jogar!"
          />

          <FlatList
            data={ads}
            keyExtractor={ad => ad.id}
            renderItem={({item}) => (
              <DuoCard 
                data={item}
                onConnect={() => openDiscordModal(item.id)}
              />
            )}
            contentContainerStyle={ads.length === 0 ? styles.emptyListContent : styles.contentList}
            style={styles.containerList}
            horizontal
            showsHorizontalScrollIndicator={false}
            ListEmptyComponent={() => (
              <Text style={styles.emptyListText}>
                Não há anúncios publicados ainda.
              </Text>
            )}
          />

          <DuoMatch 
            visible={showDiscordModal}
            discord={selectedAdDiscord}
            onClose={closeDiscordModal}
          />
        </SafeAreaView>
    </Background>
  );
}