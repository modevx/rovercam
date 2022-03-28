import {
	ImageBackground,
	Pressable,
	StyleSheet,
	Text,
	View,
} from "react-native";
import { COLORS, SIZE } from "../theme";
import Icon from "react-native-vector-icons/FontAwesome";
import FullScreenModal from "./FullScreenModal";

const ExpandedPhotoModal = ({ imgSource, isVisible, toggleModal }) => {
	return (
		<FullScreenModal isVisible={isVisible}>
			<ImageBackground
				source={imgSource}
				style={S.imgBg_style}
				imageStyle={S.imgBg_imageStyle}
				resizeMode='cover'
			>
				<Pressable onPress={toggleModal} style={S.pressable_style}>
					<Icon color='#fff' name='close' size={30} />
				</Pressable>
			</ImageBackground>
		</FullScreenModal>
	);
};

export default ExpandedPhotoModal;

const S = StyleSheet.create({
	imgBg_style: {
		borderColor: COLORS.backgroundLT,
		borderRadius: SIZE[5],
		borderWidth: 5,
		flex: 1,
		aspectRatio: 1,
	},
	imgBg_imageStyle: {
		borderRadius: SIZE[4],
		width: "100%",
		height: "100%",
	},
	pressable_style: {
		position: "absolute",
		right: SIZE[5],
		bottom: SIZE[5],
		backgroundColor: COLORS.msgDanger,
		borderRadius: 10,
		padding: 10,
		zIndex: 10,
	},
});
