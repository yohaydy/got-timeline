import React, { Component } from "react";
import { css, StyleSheet } from "aphrodite";
import { connect } from "react-redux";

class Character extends Component {
	render() {
		const { currentStep, char } = this.props;
		const classes = StyleSheet.create({
			container: {
				position: "absolute",
				width: "30px",
				height: "30px",
				borderRadius: "30px",
				border: "3px solid wheat",
				overflow: "hidden"
			}
		});
		const { name } = this.props.char;
		const styles = {
			container: {
				left:
					char.positions &&
					char.positions[currentStep] &&
					char.positions[currentStep].x + "px",
				top:
					char.positions &&
					char.positions[currentStep] &&
					char.positions[currentStep].y + "px"
			}
		};
		return (
			<div style={styles.container} className={css(classes.container)}>
				{name}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		currentStep: state.time.currentStep
	};
};

export default connect(mapStateToProps)(Character);
