import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

export default class Card extends React.Component {
	constructor (props) {
		super();
		this.handlePress = this.handlePress.bind(this);
	}

	handlePress () {
		this.props.onPress(this.props.cardId);
	}


	render () {
		const cardStyles = {
			backgroundColor: this.props.backgroundColor,
			height: this.props.height,
		};
		return (
			<TouchableOpacity
				{...this.props}
				activeOpacity={1}
				style={[styles.container, this.props.style, cardStyles]}
				onPress={this.handlePress}
			>
				{this.props.children}
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
	}
});
