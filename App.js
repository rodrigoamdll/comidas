import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,FlatList, Image } from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Pupusas',
    src: require('./src/imgs/pupusas.jpg'),
    calorias: 300,
  },
  {
    id: '2',
    title: 'Tamales',
    src: require('./src/imgs/tamales.jpg'),
    calorias: 250,
  },
  {
    id: '3',
    title: 'Yuca Frita',
    src: require('./src/imgs/yuca-frita.jpg'),
    calorias: 400,
  },
];

const Item = ({ title,img, calorias }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Image style={styles.img} source={img} />
    <Text style={styles.calorias}>Calorías: {calorias} kcal</Text>
  </View>
);

export default function App() {
  const renderItem = ({ item }) => (
    <Item title={item.title} img={item.src} calorias={item.calorias} />

  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center', // Corrige el typo "alingItems"
  },
  title: {
    fontSize: 32,
  },
  img: {
    width: 200,
    height: 125,
    borderWidth: 2,
    borderColor: '#d35647',
    resizeMode: 'contain',
    margin: 8,
  },
  calorias: {
    fontSize: 18,
    color: 'gray',
    marginTop: 10,
  },
});
