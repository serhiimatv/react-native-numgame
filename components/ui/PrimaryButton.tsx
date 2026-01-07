import { StyleSheet, View, Text, Pressable } from 'react-native';
import { Colors } from '../../enums/colors';

const PrimaryButton = ({
  children,
  onPress,
}: {
  children: string | React.ReactNode;
  onPress: () => void;
}) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.buttonInnerContainer,
          pressed && styles.pressed,
        ]}
        onPress={onPress}
        android_ripple={{ color: Colors.primary600, foreground: true }}
      >
        {typeof children === 'string' ? (
          <Text style={styles.buttonText}>{children}</Text>
        ) : (
          children
        )}
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    borderRadius: 28,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    alignItems: 'center',
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
