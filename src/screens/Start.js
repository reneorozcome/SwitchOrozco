import { useState } from 'react'
import { Number } from '../components/'
import { Card, Button } from '../utils/'
import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native'

const Start = ({ onStart }) => {
	const [input, setInput] = useState('')
	const [selected, setSelected] = useState('')
	const [confirmed, setConfirmed] = useState(false)

	const Confirmed = () => {
		if(confirmed)
			return <Card cardStyles={styles.cardNumber}>
				<Text style={styles.text}>Número seleccionado:</Text>
				<Number number={selected} />
				<View style={{...styles.buttons, ...styles.center}}>
					<Button action={() => onStart(selected)}>Empezar</Button>
				</View>
			</Card>
		return null
	}

	const limitInput = text => setInput(text.replace(/[^0-9]/g), '')
	const resetInput = () => {
		setInput('')
		setConfirmed(false)
	}
	const confirmInput = () => {
		const chose = parseInt(input)
		if(chose === NaN || chose <= 0 || chose > 99)
			return
		setInput('')
		setConfirmed(true)
		setSelected(parseInt(chose))
	}

	return <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
		<View style={styles.screen}>
			<Text style={styles.start}>Comenzar Juego</Text>
			<Card cardStyles={styles.card}>
				<Text style={styles.text}>Elije un número</Text>
				<TextInput placeholder="0" style={styles.input} blurOnSubmit autoCapitalize="none" autoCorrect={false} keyboardType="numeric" maxLength={2} onChangeText={limitInput} value={input} />
				<View style={styles.buttons}>
					<Button action={resetInput} color="gray">Limpiar</Button>
					<Button action={confirmInput}>Confirmar</Button>
				</View>
			</Card>
			<Confirmed />
		</View>
	</TouchableWithoutFeedback>
}
export default Start

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
	},
	center: {
		justifyContent: 'center'
	}
})