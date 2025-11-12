import React from "react";
import {TextInput, StyleSheet} from "react-native";

interface Props {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
}

export const Input = ({ placeholder, value, onChangeText, secureTextEntry = false }: Props) => {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginVertical: 5,
        borderRadius: 5,
    },
});