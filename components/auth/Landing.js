import React ,{useState} from 'react';
import {  View, 
    Text, 
    TouchableOpacity, 
    Dimensions,Button,SafeAreaView,
    StyleSheet,ScrollView,
    StatusBar,PixelRatio,
    Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AwesomeButton from "react-native-really-awesome-button";



const Landing = ({navigation }) => {
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const { width, height } = Dimensions.get('window');

  const setSliderPage = (event: any) => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const { currentPage: pageIndex } = sliderState;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          style={{ flex: 1 }}
          horizontal={true}
          scrollEventThrottle={16}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onScroll={(event: any) => {
            setSliderPage(event);
          }}
        >
          <View style={{ width, height }}>
            <Image
              source={require('./img/endgame.jpg')}
              style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>Movies</Text>
              <Text style={styles.paragraph}>....form Action to Adventure</Text>
            </View>
          </View>
          <View style={{ width, height }}>
            <Image
              source={require('./img/japanese-manga.jpg')}
              style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>Books</Text>
              <Text style={styles.paragraph}>... form Japanese Manga to Comic Books </Text>
            </View>
          </View>
          <View style={{ width, height }}>
           <Image
              source={require('./img/news.jpg')}
              style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>News</Text>
              <Text style={styles.paragraph}>... all in one place</Text>
            </View>
          </View>
          <View style={{ width, height }}>
            <Image
              source={require('./img/everything.jpg')}
              style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>Best deal on the market</Text>
              <Text style={styles.paragraph}>... find out about everything</Text>
            </View>
          </View>
          <View style={{ width, height }}>
            <Image
              source={require('./img/ent.jpg')}
              style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
              <Text style={styles.header}>It's all about entertainment</Text>
              <Text style={styles.paragraph}>... seriously, it is</Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.paginationWrapper}>
          {Array.from(Array(5).keys()).map((key, index) => (
            <View style={[styles.paginationDots, { opacity: pageIndex === index ? 1 : 0.2 }]} key={index} />
          ))}
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.Btn}>
          <Text >Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.Btn1}>
          <Text >Register</Text>
        </TouchableOpacity>
      
      </SafeAreaView>
      
    </>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: PixelRatio.getPixelSizeForLayoutSize(200),
    width: '100%',
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 50,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  paragraph: {
    fontSize: 17,
  },
  paginationWrapper: {
    position: 'absolute',
    bottom: 320,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    backgroundColor: '#0898A0',
    marginLeft: 10,
  },
  Btn:{
    borderRadius:30,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:30,
    marginLeft:30,
    marginRight:30,
    backgroundColor:"#fb5b5a"
  },
  Btn1:{
    borderRadius:30,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:1,
    marginBottom:30,
    marginLeft:30,
    marginRight:30,
    backgroundColor:"#fb5b5a"
  }
});

export default Landing