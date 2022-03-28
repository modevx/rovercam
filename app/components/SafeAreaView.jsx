import { SafeAreaView as RNSafeAreaView, StyleSheet } from "react-native";
import { COLORS } from "../theme";

const SafeAreaView = ({ children, onLayout }) => {
	return (
		<RNSafeAreaView onLayout={onLayout} style={S.style}>
			{children}
		</RNSafeAreaView>
	);
};

const S = StyleSheet.create({
	style: {
		flex: 1,
	},
});

export default SafeAreaView;
