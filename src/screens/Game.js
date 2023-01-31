import { useState } from 'react'
import { Number } from '../components/'
import { Card, Button } from '../utils/'
import { View, Text, StyleSheet } from 'react-native'

const Game = ({ selected }) => {
	const generate = (min, max, exclude) => {
		min = Math.ceil(min)
		max = Math.floor(max)
		const random = Math.floor(Math.random() * (max - min) + min)
		if(random === exclude)
		return generate(min, max, exclude)
		return random
	}
	const [current, setCurrent] = useState(generate(1, 100, selected))

	return <View style={styles.screen}>
		<Card cardStyles={styles.card}>
			<Text style={styles.text}>Elije un número</Text>
			<Number number={current} />
			<View style={styles.buttons}>
				<Button action={() => {}} color="secondary">-</Button>
				<Button action={() => {}}>+</Button>
			</View>
		</Card>
	</View>
}
export default Game

const styles = StyleSheet.create({
	screen: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center'
	},
	start: {
		fontSize: 18,
		margin: 20
	},
	card: {
		justifyContent: 'center',
		marginTop: 20,
		width: 350
	},
	cardNumber: {
		justifyContent: 'center',
		marginTop: 20,
		width: 200
	},
	text: {
		textAlign: 'center',
		width: '100%'
	},
	input: {
		borderBottomWidth: 1,
		borderBottomColor: 'black',
		marginVertical: 10,
		textAlign: 'center',
		width: 80
	},
	buttons: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%'
	}
})