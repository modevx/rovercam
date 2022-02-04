import {
	ImageBackground,
	Pressable,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import React from "react";

/**
 * TODO:
 * 1. cleaner way to import imgs
 */

const HomeScreen = ({ navigation }) => {
	const handleOnPressNav = screen => navigation.navigate(screen);
	return (
		<ImageBackground
			source={require("../../assets/mars-glowing.jpg")}
			style={S.imgBg}
		>
			<SafeAreaView style={S.safeArea}>
				<View style={S.screen}>
					<Pressable style={S.btn} onPress={() => handleOnPressNav("Missions")}>
						<Text>Rover Missions</Text>
					</Pressable>
					<Pressable style={S.btn} onPress={() => handleOnPressNav("Options")}>
						<Text>Photos</Text>
					</Pressable>
				</View>
			</SafeAreaView>
		</ImageBackground>
	);
};

export default HomeScreen;

const S = StyleSheet.create({
	btn: {
		borderColor: "black",
		borderWidth: 2,
		paddingHorizontal: 20,
		paddingVertical: 10,
	},
	imgBg: {
		flex: 1,
	},
	safeArea: {
		flex: 1,
	},
	screen: {
		alignItems: "center",
		height: "100%",
		justifyContent: "space-evenly",
	},
});
