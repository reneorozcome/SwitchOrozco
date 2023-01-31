import { styles } from '../constants/theme'
import { TouchableOpacity, Text } from 'react-native'

const Button = ({action, children, disabled = false, color}) => {
	return <TouchableOpacity onPress={action} disabled={disabled} style={[styles.button, disabled && styles.buttonDisabled, color && styles.buttonColors[color]]}>
		<Text style={styles.buttonText}>{children}</Text>
	</TouchableOpacity>
}
export default Button