import useSocialAuth from "@/hooks/useSocialAuth";
import { Image, Pressable, Text, View } from "react-native";
const SignInScreen = () => {
  const { handleSocialAuth } = useSocialAuth();
  return (
    <View className="mt-[5rem]">
      <View>
        <Image
          source={require("@/assets/images/hero.png")}
          className="w-full"
        />
        <View className="-mt-12 h-full bg-white rounded-tr-[2.375rem] rounded-tl-[2.375rem]  p-6 mb-16">
          <View className="flex gap-2 items-center">
            <Text className="text-center text-cod-gray text-4xl font-bold">
              Harika Tarifler Keşfedin
            </Text>
            <Text className="text-base text-kabul text-center">
              Damak tadınıza ve beceri seviyenize özel özenle seçilmiş binlerce
              tarifle daha akıllıca yemek yapın{" "}
            </Text>
          </View>
          <View className="mt-6 gap-4 flex items-center">
            <Pressable
              onPress={() => handleSocialAuth("oauth_google")}
              className="cursor-pointer flex items-center 
            justify-center flex-row gap-4 w-full 
            border border-ebb py-4 rounded-full"
            >
              <Image
                source={require("@/assets/images/google.png")}
                className="w-5 h-5"
              ></Image>
              <Text className="text-cod-gray font-semibold">
                Google ile devam et
              </Text>
            </Pressable>
          </View>
          <View className="mt-6 gap-4 flex items-center">
            <Pressable
              onPress={() => handleSocialAuth("oauth_apple")}
              className=" bg-black cursor-pointer flex items-center 
            justify-center flex-row gap-4 w-full 
            border border-ebb py-4 rounded-full"
            >
              <Image
                source={require("@/assets/images/apple.png")}
                style={{ width: 20, height: 20, tintColor: "white" }}
              ></Image>
              <Text className="text-white font-semibold">
                Apple ile Devam et
              </Text>
            </Pressable>
            <Text className="w-[80%] text-center mt-9 text-kabul font-medium">
              Devam etmek için{" "}
              <Text className="text-kabul">Gizlilik Politikasını</Text> ve
              <Text className="text-kabul"> Kullanım Şartlarını</Text> kabul
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default SignInScreen;
