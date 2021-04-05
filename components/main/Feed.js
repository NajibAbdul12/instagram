import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, TextInput, ScrollView} from 'react-native';
import { Searchbar } from 'react-native-paper';
import CatalogSlider from '../CatalogSlider';
const API_KEY = '7369ea9c2752cd8d3b4e43603ed5432f';

const Feed = () => {
  const [searchQuery, setSearchQuery] = useState('');
 
  const [popularMovieData, setPopularMovieData] = useState({results: []});
  const [popular1MovieData, setPopular1MovieData] = useState({results: []});
  const [latestMovieData, setLatestMovieData] = useState({results: []});
  const [searchData, setSearchData] = useState({results: []});
  
  const [loading, setLoading] = useState(false);

  function searchMovie(text) {
    if (text !== '') {
      fetch(
        'https://api.themoviedb.org/3/search/movie?api_key=' +
          API_KEY +
          '&page=1&query=' +
          text,
      )
        .then(response => response.json())
        .then(response => setSearchData(response))
        .then(setLoading(true))
        .catch(err => console.log(err));
    } else {
      setLoading(false);
    }
  }
  
  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=' +
        API_KEY +
        '&page=3',
    )
      .then(response => response.json())
      .then(response => setPopularMovieData(response))
      .catch(err => console.log(err));
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=' +
        API_KEY +
        '&page=1',
    )
      .then(response => response.json())
      .then(response => setPopular1MovieData(response))
      .catch(err => console.log(err));
    fetch(
      'https://api.themoviedb.org/3/tv/popular?api_key=' +
        API_KEY +
        '&page=1',
    )
      .then(response => response.json())
      .then(response => setLatestMovieData(response))
      .catch(err => console.log(err));
  
  
  }, []);
  return (
    <View style={styles.body}>
      <Text style={styles.title}></Text>
      <Searchbar
        style={styles.searchBox}
        placeholder="Search Movies .."
        placeholderTextColor={styles.searchBox.color}
        autoCapitalize="none"
        autoCorrect={false}
        value={searchQuery}
        onChangeText={text => {
          setSearchQuery(text);
          searchMovie(text);
        }}
      />
     
      {loading === false ? (
        <ScrollView>
          <View>
            <CatalogSlider title="Trending Daily Movies" data={popularMovieData} />
            <CatalogSlider title="Trending Weekly Movies" data={popular1MovieData} />
            <CatalogSlider title="Trending Weekly TV Series" data={latestMovieData} />
          </View>
        </ScrollView>
      ) : (
        <View>
          <Text style={styles.title}>Search Results for {searchQuery}</Text>
          <CatalogSlider title="" data={searchData} />
          
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white',
  },
  
  searchBox: {
    backgroundColor: '#ededed',
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Feed;