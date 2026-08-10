import { useSSO } from "@clerk/expo";
import { useState } from "react";
import { Alert } from "react-native";

const useSocialAuth = () => {
  const [loadingstrategy, setloadingStrategy] = useState<string | null>(null);
  const { startSSOFlow } = useSSO();

  const handleSocialAuth = async (strategy: "oauth_google" | "oauth_apple") => {
    if (loadingstrategy) {
      return;
    }

    setloadingStrategy(strategy);

    try {
      const { createdSessionId, setActive } = await startSSOFlow({ strategy });

      if (!createdSessionId || !setActive) {
        Alert.alert(
          "Sign-in incomplete",
          "Sign-in did not complete Please try again.",
        );
        return;
      }

      await setActive({ session: createdSessionId });
    } catch (error) {
      console.log("Beklenmeyen bir hata oluştu lütfen tekrar deneyiniz");
    } finally {
      setloadingStrategy(null);
    }
  };

  return {
    handleSocialAuth,
    loadingstrategy,
  };
};
export default useSocialAuth;
//const useSocialAuth = () => {

//   const [loadingstrategy, setloadingStrategy] = useState<string | null>(null);

//   const { startSSOFlow } = useSSO();

//   useWarmUpBrowser();

//   const handleSocialAuth = async (strategy: "oauth_google" | "oauth_apple") => {

//     if (loadingstrategy) {

//       return;

//     }

//     setloadingStrategy(strategy);

//     try {

//       const redirectUrl = AuthSession.makeRedirectUri({ path: "sso-callback" });

//       const { createdSessionId, setActive, authSessionResult } =

//         await startSSOFlow({

//           strategy,

//           redirectUrl,

//         });

//       if (

//         authSessionResult?.type === "dismiss" ||

//         authSessionResult?.type === "cancel"

//       ) {

//         return;

//       }

//       if (!createdSessionId || !setActive) {

//         Alert.alert(

//           "Giriş tamamlanamadı",

//           "Oturum oluşturulamadı. Clerk Dashboard'da Google bağlantısını ve redirect URL allowlist'ini kontrol edin.",

//         );

//         return;

//       }

//       await setActive({ session: createdSessionId });

//     } catch (error) {

//       const message =

//         error instanceof Error

//           ? error.message

//           : "Beklenmeyen bir hata oluştu. Lütfen tekrar deneyiniz.";

//       Alert.alert("Giriş hatası", message);

//     } finally {

//       setloadingStrategy(null);

//     }

//   };

//   return {

//     handleSocialAuth,

//     loadingstrategy,

//   };

// };

// export default useSocialAuth;
