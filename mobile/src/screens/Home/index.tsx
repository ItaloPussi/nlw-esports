import { View, Image, FlatList } from 'react-native';
import { styles } from './styles';
import { Heading } from '../../components/Heading';
import { GameCard } from '../../components/GameCard';
import { GAMES } from '../../utils/games';
import logoImg from '../../assets/logo-nlw-esports.png'

export function Home() {
  return (
    <View style={styles.container}>
      <Image 
        source={logoImg}
        style={styles.logo}
      />

      <Heading 
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />

      <FlatList 
        data={GAMES}
        keyExtractor={game => game.id}
        renderItem={({item}) => (
          <GameCard 
            data={item}
            activeOpacity={0.8}
          />
        )}
        contentContainerStyle={styles.contentList}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}