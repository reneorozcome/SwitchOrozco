import { View, Text } from "react-native"
import { styles } from '../constants/theme'

const Header = ({ title }) => {
	return <View style={styles.header}>
		<Text style={styles.header.title}>{title}</Text>
	</View>
}
export default Header;