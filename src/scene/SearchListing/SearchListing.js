import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity
} from 'react-native';

import { FeedsCard } from '../../component/FeedsCard';

class SearchListing extends Component {

    keyExtractor = (item, index) => index.toString();

    renderFeedsCard = ({ item }) => {
        const { navigation } = this.props;

        return <FeedsCard
            time={item.time}
            name={item.owner}
            price={item.price}
            title={item.title}
            imageURL={item.url}
            thumbnailURL={item.url}
            navigation={navigation}
        />
    }

    renderFlatList = () => {
        return (
            <FlatList
                data={dataSource}
                renderItem={this.renderFeedsCard}
                // removeClippedSubviews={false}
                keyExtractor={this.keyExtractor}
                showsVerticalScrollIndicator={false}
            />
        );
    }

    render() {
        return (
            this.renderFlatList()
        );
    }
}

SearchListing.propTypes = {
    navigation: PropTypes.object
};

export default SearchListing;


const dataSource = [
    {
        id: 1,
        owner: 'Dipak Katwal',
        time: '24th March 2018',
        price: '80000',
        url: 'https://firebasestorage.googleapis.com/v0/b/innernepal-dca5b.appspot.com/o/showcaseImages%2Fshowcase_macbook_air.jpeg?alt=media&token=98f2f5dd-0d02-4365-b92d-f91a06bedb64',
        title: 'MacBook Air is powered by fifth-generation Intel Core i5 and i7 processors. This ultra-efficient architecture was designed to use less power and still deliver high performance. Which means not only can you do whatever you want — you can keep doing it for longer than before. In addition, the Intel HD Graphics 6000 processor offers advanced performance you’ll particularly notice with games and other graphics-intensive tasks.MacBook Air supports ultra-fast 802.11ac Wi‑Fi. When connected to an 802.11ac base station — including AirPort Extreme and AirPort Time Capsule — wireless performance is up to three times faster than 802.11n Wi-Fi.2 And your Wi-Fi range improves as well. With Bluetooth technology, you can connect MacBook Air to Bluetooth-enabled devices like speakers and headphones. Even without all the wires, you’re totally connected.'
    },
    {
        id: 2,
        owner: 'David B Smith',
        time: '2nd Jan 2018',
        price: '95000',
        url: 'https://firebasestorage.googleapis.com/v0/b/innernepal-dca5b.appspot.com/o/showcaseImages%2Fshowcase_iphonex.jpg?alt=media&token=5339b75b-8199-4bcc-82e1-0d19f377e058',
        title: 'With iPhone X, the device is the display. An all‑new 5.8‑inch Super Retina screen fills the hand and dazzles the eyes. A tiny space houses some of the most sophisticated technology we’ve ever developed, including the cameras and sensors that enable Face ID. The most durable glass ever in a smartphone, front and back. Surgical‑grade stainless steel. Wireless charging. Water and dust resistance.'
    },
    {
        id: 3,
        owner: 'Jessica Smith',
        time: '15th Dec 2017',
        price: '40000',
        url: 'https://firebasestorage.googleapis.com/v0/b/innernepal-dca5b.appspot.com/o/showcaseImages%2Fshowcase_oculus.jpg?alt=media&token=5964e66e-5da8-41ee-b95f-3ed820d02a2b',
        title: 'Oculus Rift’s advanced display technology combined with its precise, low-latency constellation tracking system enables the sensation of presence. Customizable, comfortable, adaptable, and beautiful, Rift is technology and design as remarkable as the experiences it enables. Every aspect of Rift was designed to be easy, inviting, and comfortable to use - and that extends to the VR environment we’ve created as a starting point for your journeys. Discover and download games across genres ranging from action RPGs, sci-fi shooters, mind-bending puzzle games, and more - and play them from an entirely new perspective. Lucky’s Tale is included with every Rift purchase.'
    },


    {
        id: 4,
        owner: 'Pamela L Smith',
        time: 'March 28th 2018',
        price: '120000',
        url: 'https://firebasestorage.googleapis.com/v0/b/innernepal-dca5b.appspot.com/o/showcaseImages%2Fshowcase_drone.jpg?alt=media&token=6c58b973-3bff-488f-bad4-e5b9f0673e2f',
        title: 'HIGH-QUALITY DRONE GREAT FOR BEGINNERS: Equipped with REAL-TIME WI-FI transmission and HD camera. Wonderful choice for starting their journey with drone flying. It’s made of premium materials and comes at a fantastic value.'
    },
    {
        id: 5,
        owner: 'Becky Smith',
        time: 'Jan 22nd 2018',
        price: '60000',
        url: 'https://firebasestorage.googleapis.com/v0/b/innernepal-dca5b.appspot.com/o/showcaseImages%2Fshowcase_apartment.jpg?alt=media&token=223e8553-f147-42c5-a593-15469270ae95',
        title: 'Available for Rent.'

    }
]