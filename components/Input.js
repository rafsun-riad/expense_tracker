import { View, Text, TextInput, StyleSheet } from 'react-native';
import { GlobalStyle } from '../constants/styles';

function Input({ label, textInputConfig, style }) {
  const inputStyles = [styles.input];
  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
    flex: 1,
  },
  label: {
    fontSize: 12,
    color: GlobalStyle.color.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyle.color.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: GlobalStyle.color.primary700,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
});
