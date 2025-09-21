import { View, Text } from 'react-native';
import { GlobalStyle } from '../styling/GlobalStyle';

function Header({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <View>
      <Text className="text-xl text-center">{title}</Text>
      <Text className="capitalize mt-2 text-small">{description}</Text>
    </View>
  );
}

export default Header;
