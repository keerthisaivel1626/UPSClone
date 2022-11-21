import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import tw from 'twrnc';

const Home: FC = () => {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
export default Home;