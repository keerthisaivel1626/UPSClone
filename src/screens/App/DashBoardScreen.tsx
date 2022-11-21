import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import tw from 'twrnc';

const DasBoard: FC = () => {
    return (
        <View style={styles.container}>
            <Text>DasBoard Screen</Text>
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
export default DasBoard;