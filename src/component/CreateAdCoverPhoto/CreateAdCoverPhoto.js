import React, { Component } from 'react';
import {
    View,
    Image
} from 'react-native';
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';

import styles from './styles';

const {
    containerStyle,
    semiTransparentViewStyle,
    imageViewStyle,
    textContainerStyle,
    titleTextStyle,
    dateTextStyle
} = styles;

export const CreateAdCoverPhoto = ({ imageURL }) => (
    <View style={containerStyle}>
        <Image
            source={{ uri: imageURL }}
            style={imageViewStyle}
        />
        <View style={semiTransparentViewStyle} />
        <View style={textContainerStyle}>
            <Animatable.Text style={titleTextStyle} animation="fadeInLeft" delay={200}></Animatable.Text>
            <Animatable.Text style={titleTextStyle} animation="fadeInLeft" delay={200}>Things buyers want to know</Animatable.Text>
            <Animatable.Text style={dateTextStyle} animation="fadeInLeft" delay={200}>Cover Photo</Animatable.Text>
        </View>
    </View >
);

CreateAdCoverPhoto.propTypes = {
    imageURL: PropTypes.string
};
