import LottieView from 'lottie-react-native'
import { View } from 'react-native'

const SplashScreen = () => {
  return(
    <View className='flex-1 justify-center items-center bg-[#0f0D23]'>
      <LottieView
      source={require('@/assets/Splashscreen.json')}
      autoPlay
      loop={true}
      speed={2}
      style={{width: 380, height: 1100}}
      />
    </View>
  )
}

export default SplashScreen
