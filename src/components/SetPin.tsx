import React from 'react';
import { View, Text } from 'react-native';
import { Icon, TextInput } from 'react-native-paper';

type ValuesProps = {
  value1: string;
  value2: string;
  value3: string;
  value4: string;
};
function SetPin({
  iconName,
  title,
  description,
  values,
}: {
  iconName: string;
  title: string;
  description: string;
  values: ValuesProps;
}) {
  return (
    <View className="gap-2" style={{ paddingHorizontal: 15 }}>
      <View className="flex-row items-center gap-2">
        <Icon source={iconName} size={22} />
        <Text className="text-medium">{title} </Text>
      </View>
      <View>
        <Text className="text-small">{description}</Text>
      </View>
      <View className="flex-row justify-between mt-5">
        <View>
          <TextInput
            mode="flat"
            value={values.value1}
            placeholder={values.value1}
            keyboardType="phone-pad"
            style={{
              width: 42,
              backgroundColor: 'transparent',
              elevation: 0,
            }}
          />
        </View>
        <View>
          <TextInput
            mode="flat"
            value={values.value2}
            placeholder={values.value2}
            keyboardType="phone-pad"
            style={{
              width: 42,
              backgroundColor: 'transparent',
              elevation: 0,
            }}
          />
        </View>
        <View>
          <TextInput
            mode="flat"
            value={values.value3}
            placeholder={values.value3}
            keyboardType="phone-pad"
            style={{
              width: 42,
              backgroundColor: 'transparent',
              elevation: 0,
            }}
          />
        </View>
        <View>
          <TextInput
            mode="flat"
            value={values.value4}
            placeholder={values.value4}
            keyboardType="phone-pad"
            style={{
              width: 42,
              backgroundColor: 'transparent',
              elevation: 0,
            }}
          />
        </View>
      </View>
    </View>
  );
}

export default SetPin;
