import React from "react";
import { VectorMap } from "@react-jvectormap/core";

// Import langsung ke file JSON di dalam node_modules
// @ts-ignore
import indonesiaMap from "@react-jvectormap/indonesia/idnMerc.json";

const CountryMap: React.FC = () => {
  return (
    <div className="w-full h-full">
      <VectorMap
        map={indonesiaMap}
        backgroundColor="transparent"
        zoomOnScroll={false}
        regionStyle={{
          initial: {
            fill: "#D0D5DD",
            stroke: "#FFFFFF",
            strokeWidth: 0.5,
          }
        }}
        markers={[
          { latLng: [-6.2088, 106.8456], name: "Jakarta" },
          { latLng: [-7.2575, 112.7521], name: "Surabaya" }
        ]}
      />
    </div>
  );
};

export default CountryMap;