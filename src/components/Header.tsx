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
    <View style={GlobalStyle.content}>
      <View>
        <Text className="text-xl text-center">{title}</Text>
        <Text className="capitalize mt-2 text-small">{description}</Text>
      </View>
    </View>
  );
}

export default Header;
