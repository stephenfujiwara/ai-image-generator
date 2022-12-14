import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Canvas } from "@react-three/fiber";
import { Cloud, Sky } from "@react-three/drei";
import { Suspense } from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 100] }}>
        <ambientLight intensity={0.8} />
        <pointLight intensity={2} position={[0, 0, -1000]} />
        <Suspense fallback={null}>
          <Cloud position={[47, 15, 25]} speed={1} opacity={1} />
          <Cloud position={[-47, 28, 25]} speed={1} opacity={1} />
        </Suspense>
        <Sky
          azimuth={0.05}
          turbidity={0.5}
          rayleigh={0.5}
          inclination={0.6}
          distance={1000}
        />
      </Canvas>
    </div>
    <div className="app-container">
      <App />
    </div>
  </React.StrictMode>
);
