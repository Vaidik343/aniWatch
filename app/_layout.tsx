import { ApiProvider } from "@/context/ApiContext";
import { Slot } from "expo-router";
import { PaperProvider } from 'react-native-paper';
import "./globals.css";
export default function RootLayout() {
  return(
  
   <ApiProvider>
        <PaperProvider>
    <Slot />;
    </PaperProvider>
   </ApiProvider>
   
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
