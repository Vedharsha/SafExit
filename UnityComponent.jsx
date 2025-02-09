import { Unity, useUnityContext } from "react-unity-webgl";

function UnityComponent() {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "unity/Build/safexit webgl.loader.js",
    dataUrl: "unity/Build/safexit webgl.data",
    frameworkUrl: "unity/Build/safexit webgl.framework.js",
    codeUrl: "unity/Build/safexit webgl.wasm",
  });

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <h2 className="text-2xl font-bold my-4">Traffic Simulation</h2>
      {!isLoaded && (
        <div className="flex flex-col items-center justify-center">
          <p>Loading... ({Math.round(loadingProgression * 100)}%)</p>
          <div className="w-64 h-2 bg-gray-200 rounded-full mt-2">
            <div
              className="h-full bg-blue-500 rounded-full"
              style={{ width: `${loadingProgression * 100}%` }}
            ></div>
          </div>
        </div>
      )}
      <Unity
        unityProvider={unityProvider}
        className={`w-full h-[90vh] ${!isLoaded ? "hidden" : ""}`} 
        style={{
          width: "100%", 
          height: "90vh", 
          visibility: isLoaded ? "visible" : "hidden",
          backgroundColor:"darkgray",
        }}
      />
    </div>
  );
}

export default UnityComponent;
