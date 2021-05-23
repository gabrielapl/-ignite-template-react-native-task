import React from 'react';
import { View, Text, StatusBar, StyleSheet, } from 'react-native';

interface ThemeProps{
  theme:boolean;
}

export function Header({theme}:ThemeProps) {
  return (
    <>
    <View style={[styles.header,{backgroundColor: theme? '#483C67' : '#273FAD' }]}>
      <Text style={styles.headerText}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
     
    </View>
      </>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  }
});
