import React, { FC } from "react";
import { Text, View, StyleSheet } from "react-native";

const SignUp: FC = () => {
    return (
        <View style={styles.constainer}>
            <Text>SignUp Screen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default SignUp;
