import Constants from 'expo-constants';
import { StatusBar, StyleSheet, View, Text } from 'react-native';
import React from 'react';
export default class Status extends React.Component {
    state = {
        isConnected: false,
    };
    render() {
        const { isConnected } = this.state;
        const backgroundColor = isConnected ? 'white' : 'red';
        const statusBar = (
            <StatusBar backgroundColor={backgroundColor} barStyle={isConnected ? 'dark-content' : 'light-content'} animated={false} />
        );
        const messageContainer = (
            <View style={styles.messageContainer} pointerEvents={'none'}>
                {statusBar}
                {!isConnected && (
                    <View style={styles.bubble}>
                        <Text style={styles.text}>No network connection</Text>
                    </View>
                )}
            </View>
        );
        if (Platform.OS === 'ios') {
            return (
                <View style={[styles.status, { backgroundColor }]}>
                    {messageContainer}
                </View>
            );
        }
        return messageContainer; // Temporary!
    }
}
const styles = StyleSheet.create({
    messageContainer: {
        zIndex: 1,
        position: 'absolute',
        top: 20,
        right: 0,
        left: 0,
        height: 80,
        alignItems: 'center',
    },
    bubble: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: 'red',
    },
    text: {
        color: 'white',
    },
});