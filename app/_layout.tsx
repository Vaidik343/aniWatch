// import SplashScreen from "@/components/SplashScreen"; 
import { ApiProvider } from "@/context/ApiContext";
import { AuthProvider } from "@/context/AuthContext";
import { Slot } from "expo-router";
import { PaperProvider } from "react-native-paper";
import "./globals.css";

export default function RootLayout() {
  // const [showSplash, setShowSplash] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowSplash(false);
  //   }, 5000);

  //   return () => clearTimeout(timer);
  // }, []);

  // if (showSplash) {
  //   return (
  //     <SplashScreen />
  //   );
  // }

  return (
    <AuthProvider>
      <ApiProvider>
        <PaperProvider>
          <Slot />
        </PaperProvider>
      </ApiProvider>
    </AuthProvider>
  );
}


// import { Stack } from "expo-router";

// export default function RootLayout() {
//   return (
//     <>
//     <Stack>
//       <Stack.Screen  name="(tabs)"   />
//     </Stack>
//     </>
//   )
// }
