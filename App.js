import React from 'react';
import { useFonts } from 'expo-font';
import { Karla_400Regular, Karla_700Bold } from '@expo-google-fonts/karla';
import { Rubik_700Bold, Rubik_900Black } from '@expo-google-fonts/rubik';

import Routes from './src/routes'; 

export default function App() {

  const [fontsLoaded] = useFonts({
    Karla_400Regular,
    Karla_700Bold,
    Rubik_700Bold,
    Rubik_900Black
  });

  if(!fontsLoaded){
    return null;
  }

  return (
    <Routes/>
  );
}
