import { StyleSheet } from 'react-native';

import { SLIDER_HEIGHT, screenWidth, screenHeight } from '../../utilities/ScreenSize';
import Colors from '../../styles/Color';

export default StyleSheet.create({
    containerStyle: {
        alignSelf: 'center',
        width: screenWidth,
        overflow: 'hidden',
        height: SLIDER_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.dark
    },
    semiTransparentViewStyle: {
        height: SLIDER_HEIGHT, // same width and height for the container
        width: screenWidth,
        position: 'absolute',
        backgroundColor: Colors.semiTransparentDarkOverlay
    },
    imageViewStyle: {
        height: SLIDER_HEIGHT,
        width: screenWidth,
        position: 'absolute',
        bottom: 0,
        marginLeft: screenWidth / 2,
        backgroundColor: '#FFFFFF'
    },
    textContainerStyle: {
        height: SLIDER_HEIGHT, // same width and height for the container
        width: screenWidth,
        position: 'absolute',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    titleTextStyle: {
        color: '#FFFFFF',
        fontSize: 25,
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 10,
        textAlign: 'center',
    },
    dateTextStyle: {
        color: '#FFFFFF',
        fontSize: 12,
        paddingBottom: 10
    }
});
