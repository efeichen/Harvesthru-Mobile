import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import NextButton from '~/components/Buttons/NextButton';
import AuthTextInput from '~/components/TextInputs/AuthTextInput';
import Header from '~/components/Headers/Header';

const TEXT_INPUT_WIDTH = 290;

export default class Signup extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.signUpContainer}>
        <Header goBack={() => this.props.navigation.goBack()} />
        <Text style={styles.signUpTitle}>Sign Up</Text>
        <AuthTextInput contentWidth={TEXT_INPUT_WIDTH} text="Name" type="name" />
        <AuthTextInput
          contentWidth={TEXT_INPUT_WIDTH}
          text="Email"
          type="email"
        />
        <AuthTextInput
          contentWidth={TEXT_INPUT_WIDTH}
          text="Enter Your Password"
          type="password"
        />
        <AuthTextInput
          contentWidth={TEXT_INPUT_WIDTH}
          text="Confirm Your Password"
          type="confirm"
        />
        <NextButton
          text={'CREATE'}
          onPress={() => this.props.navigation.navigate('Phone')}
          extraStyles={styles.btnStyles}
        />
        <View style={styles.redirectLogin}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.loginTextBold}>Log In!</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  signUpContainer: {
    paddingTop: 70,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  signUpTitle: {
    fontFamily: 'Quicksand-Bold',
    fontStyle: 'normal',
    fontSize: 36,
    lineHeight: 45,
    color: '#9ACD00',
    marginBottom: 10,
    textAlign: 'left',
    width: TEXT_INPUT_WIDTH,
  },

  btnStyles: {
    marginTop: 80,
  },

  authButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: TEXT_INPUT_WIDTH,
  },

  redirectLogin: {
    flexDirection: 'row',
    width: TEXT_INPUT_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 15,
  },

  loginText: {
    fontFamily: 'Quicksand-Regular',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'center',
  },

  loginTextBold: {
    fontFamily: 'Quicksand-Bold',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'center',
  },
});
