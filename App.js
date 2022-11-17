
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, TouchableHighlightBase, Linking } from 'react-native';
import { styles } from './src/style';

export default function App() {
  const link = (site) => {
    Linking.openURL(site);
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>

        <View style={styles.icons}>
          <TouchableOpacity>
            <Image source={require('./src/image/hamburguer.png')} style={{ width: 35, height: 35, marginLeft: 25, }} />
          </TouchableOpacity>
          <Image source={require('./src/image/crunchyroll.png')} style={{ width: 273, height: 40, marginLeft: -3, }} />
          <TouchableOpacity onPress={() => link("https://www.crunchyroll.com/pt-br/search")}>
            <Image source={require('./src/image/search.png')} style={{ width: 35, height: 35, marginLeft: -17 }} />
          </TouchableOpacity>
          <StatusBar style="auto" />
          <TouchableOpacity>
            <Image source={require('./src/image/pontos.png')} style={{ width: 25, height: 35, marginLeft: 7 }} />
          </TouchableOpacity>
        </View>

        <View style={styles.texto}>
          <TouchableOpacity>
            <View><Text style={styles.texto}>INICIO</Text></View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View><Text style={styles.texto}>NOVO</Text></View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View><Text style={styles.texto}>ANIME</Text></View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View><Text style={styles.texto}>MANGA SHOP</Text></View>
          </TouchableOpacity>
        </View>

      </View>
      <Text style={styles.textoP}>POPULAR</Text>

      <View style={styles.boxImagem}>
        <TouchableOpacity style={styles.borda} onPress={() => link("https://www.crunchyroll.com/pt-br/search")}>
          <Image source={require('./src/image/cyberPunk.jpg')} style={styles.imagem} />
          <Text style={styles.textoAnime}>Cyber Punk</Text><Text style={styles.textoVideo}> 12 Vídeos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.borda} onPress={() => link("https://www.crunchyroll.com/pt-br/series/GY5P48XEY/demon-slayer-kimetsu-no-yaiba")}>
          <Image source={require('./src/image/demonSlayer.jpg')} style={styles.imagem} />
          <Text style={styles.textoAnime} >Demon Slayer</Text><Text style={styles.textoVideo}> 25 Vídeos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.borda} onPress={() => link("https://www.crunchyroll.com/pt-br/series/GRDV0019R/jujutsu-kaisen")}>
          <Image source={require('./src/image/jujutsu.jpg')} style={styles.imagem} />
          <Text style={styles.textoAnime}>Jujutsu Kaisen</Text><Text style={styles.textoVideo}> 15 Vídeos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.borda} onPress={() => link("https://www.crunchyroll.com/pt-br/series/G6497Z43Y/miss-kobayashis-dragon-maid")}>
          <Image source={require('./src/image/kobayashi.jpg')} style={styles.imagem} />
          <Text style={styles.textoAnime}>Kobayashi-san</Text><Text style={styles.textoVideo}> 20 Vídeos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.borda} onPress={() => link("https://www.crunchyroll.com/pt-br/series/GQWH0M77N/made-in-abyss-br/search")}>
          <Image source={require('./src/image/madeAbbys.jpg')} style={styles.imagem} />
          <Text style={styles.textoAnime}>Made in Abbys</Text><Text style={styles.textoVideo}> 12 Vídeos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.borda} onPress={() => link("https://www.crunchyroll.com/pt-br/series/G4PH0WXVJ/spy-x-family")}>
          <Image source={require('./src/image/spyFamily.png')} style={styles.imagem} />
          <Text style={styles.textoAnime}>Spy Family</Text><Text style={styles.textoVideo}> 20 Vídeos</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => link("https://github.com/Ale-ssandra")} style={styles.bola}><Image source={require('./src/image/menu.png')} style={{ width: 60, height: 60, marginTop: 15, marginLeft: 15, }} />

      </TouchableOpacity>
    </View>
  );
}

