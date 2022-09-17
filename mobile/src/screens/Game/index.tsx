import { useState, useEffect } from 'react';
import { SafeAreaView, TouchableOpacity, View, Image, FlatList, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'
import { Entypo } from "@expo/vector-icons"

import logoImg from '../../assets/logo-nlw-esports.png'
import { Background } from '../../components/Background';
import { styles } from './styles';
import { GameProps } from '../../components/GameCard';
import { THEME } from '../../theme';
import { Heading } from '../../components/Heading';
import { AdProps, DuoCard } from '../../components/DuoCard';

export function Game() {
  const route = useRoute()
  const game = route.params as GameProps

  const navigation = useNavigation()

  const [ads, setAds] = useState<AdProps[]>([])

  function handleGoBack(){
    navigation.goBack()
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
          <View style={styles.header}>
            <TouchableOpacity
              onPress={handleGoBack}
            >
              <Entypo 
                name='chevron-thin-left'
                color={THEME.COLORS.CAPTION_300}
                size={20}
              />
            </TouchableOpacity>

            <Image 
              source={logoImg}
              style={styles.logo}
            />

            <View style={styles.right}/>
          </View>

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
                onConnect={() => {}}
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
        </SafeAreaView>
    </Background>
  );
}