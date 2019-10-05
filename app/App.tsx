/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import { NavigationFooter } from './organisms/NavigationFooter';

const App: () => React$Node = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={{ flex: 1}}>
                <ScrollView><Text>main</Text></ScrollView>
                <NavigationFooter></NavigationFooter>
            </SafeAreaView>
        </>
    );
};

export default App;
