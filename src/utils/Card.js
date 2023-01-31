import { View } from 'react-native'
import { styles } from '../constants/theme'

const Card = ({ children, cardStyles }) => {
	return <View style={{...styles.card, ...cardStyles}}>
		{children}
	</View>
}
export default Card