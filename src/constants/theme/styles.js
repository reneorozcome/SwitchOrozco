import { colors } from './colors'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	header: {
		alignItems: "center",
		backgroundColor: colors.primary,
		justifyContent: "center",
		padding: 40,
		title: {
			color: 'white',
			fontFamily: 'Sofia-Bold-Italic',
			fontSize: 22,
			textTransform: 'uppercase'
		}
	},
	card: {
		alignItems: 'center',
		backgroundColor: 'white',
		borderRadius: 10,
		elevation: 5,
		flexDirection: 'row',
		flexWrap: 'wrap',
		maxWidth: '90%',
		padding: 20,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.26,
		shadowRadius: 6
	},
	button: {
		backgroundColor: colors.primary,
		paddingVertical: 8,
		width: 140
	},
	buttonDisabled: {
		backgroundColor: colors.gray,
		opacity: 0.5
	},
	buttonColors: {
		gray: {
			backgroundColor: colors.gray
		},
		secondary: {
			backgroundColor: colors.secondary
		},
		accent: {
			backgroundColor: colors.accent
		}
	},
	buttonText: {
		color: 'white',
		fontSize: 16,
		textAlign: 'center',
		textTransform: 'uppercase'
	}
})
export default styles