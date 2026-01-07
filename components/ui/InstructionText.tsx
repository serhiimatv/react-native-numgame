import { StyleProp, StyleSheet, TextStyle } from 'react-native';
import { Colors } from '../../enums/colors';
import { Text } from 'react-native';

const InstructionText = ({
  children,
  style,
}: {
  children: string;
  style?: StyleProp<TextStyle>;
}) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
    fontFamily: 'OpenSans-Regular',
    textAlign: 'center',
  },
});
