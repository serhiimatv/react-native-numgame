import { StyleSheet, View } from 'react-native';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return <View style={styles.container}>{children}</View>;
};

export default AppLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
