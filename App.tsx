import theme from '@/theme';
import { ThemeProvider } from 'styled-components/native';
import {useFonts, Inter_400Regular, Inter_700Bold} from "@expo-google-fonts/inter"
import { StatusBar } from 'expo-status-bar';
import { Home } from '@/screens/Home';
import { Loading } from '@/components/loading';


export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" />
      {fontsLoaded ? <Home/> :<Loading/>}
    </ThemeProvider>
  );
}