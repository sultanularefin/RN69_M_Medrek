import React from 'react';
import {
  // SafeAreaView,
  // ScrollView,
  // StatusBar,
  StyleSheet,
  // Text,
  // useColorScheme,
  View,
  Image,
  TextInput,
  Button,
} from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

export interface A_Form_Props {}

const A_Form: React.FC<A_Form_Props> = ({}) => {
  return (
    <>
      <View style={A_Form_Styles.logoContainer}>
        <Image
          resizeMode="contain"
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
          style={A_Form_Styles.logo}
        />
      </View>
      <View style={A_Form_Styles.inputsContainer}>
        <TextInput
          placeholder="Single line input"
          style={A_Form_Styles.input}
        />
        <TextInput
          multiline
          placeholder="Multiline input"
          style={[A_Form_Styles.input, A_Form_Styles.multilineInput]}
        />
        <TextInput
          multiline
          placeholder="Large multiline input"
          style={[
            A_Form_Styles.input,
            A_Form_Styles.multilineInput,
            A_Form_Styles.largeMultilineInput,
          ]}
        />
      </View>
      <View style={A_Form_Styles.submitButtonContainer}>
        <Button
          onPress={() => {
            // On submit ...
          }}
          title="Submit"
        />
      </View>
    </>
  );
};

const A_Form_Styles = StyleSheet.create({
  logoContainer: {},
  input: {},
  multilineInput: {},
  submitButtonContainer: {},
  largeMultilineInput: {},
  inputsContainer: {},
  logo: {},
});

export default A_Form;
