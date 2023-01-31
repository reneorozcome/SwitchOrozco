import styles from './styles'
import { useState } from 'react'
import { useFonts } from 'expo-font'
import { Header } from './components'
import { Start, Game } from './screens'
import { colors } from './constants/theme'
import { ActivityIndicator, StatusBar, View } from 'react-native'

const App = () => {
	const [loaded] = useFonts({
		'Sofia-Light': require('../assets/fonts/SofiaSansSemiCondensed-Light.ttf'),
		'Sofia-Light-Italic': require('../assets/fonts/SofiaSansSemiCondensed-LightItalic.ttf'),
		'Sofia-Regular': require('../assets/fonts/SofiaSansSemiCondensed-Regular.ttf'),
		'Sofia-Regular-Italic': require('../assets/fonts/SofiaSansSemiCondensed-Italic.ttf'),
		'Sofia-Bold': require('../assets/fonts/SofiaSansSemiCondensed-Bold.ttf'),
		'Sofia-Bold-Italic': require('../assets/fonts/SofiaSansSemiCondensed-BoldItalic.ttf')
	})
	const [userNumber, setUserNumber] = useState()
	const onStart = number => setUserNumber(number)
	const Content = () => userNumber ? <Game selected={userNumber} /> : <Start onStart={onStart} />
	
	if(!loaded)
		return <View style={{...styles.screen, ...styles.verticalCenter}}>
			<ActivityIndicator size="large" color={colors.primary} />
		</View>
	return <View style={styles.screen}>
		<StatusBar hidden={true} />
		<Header title="Adivina el número" />
		<Content />
	</View>
}
export default App