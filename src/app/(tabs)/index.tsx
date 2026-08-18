import { fetchAllRecipes } from "@/services/recipes.services";
import { IRecipe } from "@/types/recipes.types";
import { useEffect, useState } from "react";
import { Image, ScrollView, View } from "react-native";
import SafeAreaView from "../../components/SafeAreaView";
const Homescreen = () => {
  const [allRecipes, setAllRecipes] = useState<IRecipe[]>([]);
  const handleGetAllRecipes = async () => {
    const response = await fetchAllRecipes();
    setAllRecipes(response?.allRecipes || []);
  };
  useEffect(() => {
    handleGetAllRecipes();
  }, []);
  if (allRecipes.length === 0) {
    return null;
  }
  return (
    <SafeAreaView className="h-full bg-vista-white" edges={["top"]}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View className="relative">
          <Image
            source={{ uri: allRecipes[0].thumbnail }}
            className="w-full rounded-lg"
            style={{ height: 300 }}
          />
        </View>
        <View className="h-full opacity-20 rounded-lg w-full bg-black absolute"></View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Homescreen;
