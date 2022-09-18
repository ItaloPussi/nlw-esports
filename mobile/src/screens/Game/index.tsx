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
import { Axios } from '../../services/axios';

export function Game() {
  const route = useRoute()
  const game = route.params as GameProps

  const [ads, setAds] = useState<AdProps[]>([])

  const [selectedAdDiscord, setSelectedAdDiscord] = useState("")
  const [showDiscordModal, setShowDiscordModal] = useState(false)
  
  async function openDiscordModal(adId: string){
    Axios.get(`/ads/${adId}/discord`)
    .then(response => {
      setSelectedAdDiscord(response.data.discord)
      setShowDiscordModal(true)
    })
    .catch(err => console.log(err))
  }

  function closeDiscordModal(){
    setSelectedAdDiscord("")
    setShowDiscordModal(false)
  }

  useEffect(() => {
    if(!game) return

    Axios.get(`/games/${game.id}/ads`)
      .then(response => setAds(response.data))
      .catch()
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