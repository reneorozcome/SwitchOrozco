import { View, Text, StyleSheet } from 'react-native'

const Number = ({ number }) => {
	return <View style={styles.container}>
		<Text style={styles.number}>{number}</Text>
	</View>
}
export default Number

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		width: '100%'
	},
	number: {
		fontSize: 30,
		marginVertical: 20
	}
})