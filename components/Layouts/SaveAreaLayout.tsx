import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SaveAreaLayout = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) => {
  const safeAreaInsets = useSafeAreaInsets();
  return (
    <View
      style={[
        style,
        styles.container,
        {
          marginTop: safeAreaInsets.top,
          marginLeft: safeAreaInsets.left,
          marginRight: safeAreaInsets.right,
        },
      ]}
    >
      {children}
    </View>
  );
};

export default SaveAreaLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
