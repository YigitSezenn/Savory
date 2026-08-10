import { View, Text,Image } from "react-native";
const SignInScreen= () => {
 return(
    <View className="mt-[5rem]">
      
           <View>
             <Image source={require("@/assets/images/hero.png")} className="w-full" />
           <View className = "-mt-12 h-full bg-white rounded-tr-[2.375rem] rounded-tl-[2.375rem]  p-6 mb-16" >
             <View className = "flex gap-2 items-center">
             <Text className = "text-center text-cod-gray text-4xl font-bold">Harika Tarifler Keşfedin</Text>
             <Text className = "text-base text-kabul text-center">Damak tadınıza ve beceri seviyenize özel özenle seçilmiş binlerce tarifle daha akıllıca yemek yapın </Text>
             </View>
           </View>
           </View>
           
    </View>
 )
}
export default SignInScreen;