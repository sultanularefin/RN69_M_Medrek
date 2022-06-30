import React, { useCallback } from "react";
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
  Button, SafeAreaView, KeyboardAvoidingView, ScrollView,
} from "react-native";

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



const B_Form: React.FC = () => {
  const onFocusEffect = useCallback(() => {
    AvoidSoftInput.setAdjustPan();
    return () => {
      AvoidSoftInput.setDefaultAppSoftInputMode();
    };
  }, []);

  useFocusEffect(onFocusEffect);

  return (<SafeAreaView
    edges={[ 'left', 'right' ]}
    style={commonStyles.screenContainer}>
    <KeyboardAvoidingView
      behavior="position"
      style={commonStyles.keyboardAvoidingView}>
      <ScrollView
        bounces={false}
        contentContainerStyle={commonStyles.scrollContainer}
        contentInsetAdjustmentBehavior="always"
        overScrollMode="always"
        showsVerticalScrollIndicator={true}
        style={commonStyles.scroll}
      >
        <A_Form/>
      </ScrollView>
    </KeyboardAvoidingView>
  </SafeAreaView>);
};


const commonStyles = StyleSheet.create({
  scrollContainer: {},

  scroll: {},
  keyboardAvoidingView: {},
});




export default B_Form;
