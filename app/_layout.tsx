import { ApiProvider } from "@/context/ApiContext";
import { AuthProvider } from "@/context/AuthContext";
import { Slot } from "expo-router";
import { PaperProvider } from 'react-native-paper';
import "./globals.css";

export default function RootLayout() {
  return(
  <AuthProvider>
   <ApiProvider>
        <PaperProvider>
    <Slot />
    </PaperProvider>
   </ApiProvider>
   </AuthProvider>
   
  )
  
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
