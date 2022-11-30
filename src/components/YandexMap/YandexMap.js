import './YandexMap.css';
import React from "react";
import { createRoot } from "react-dom/client";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const center = [55.753134, 37.640255];

const images = [...Array(26)].map((n, i) => {
  const letter = String.fromCharCode(i + 97);
  return `https://img.icons8.com/ios-filled/2x/marker-${letter}.png`;
});

const YandexMap = (props) => (
  <YMaps query={{ load: "package.full" }}>
    <Map
      state={{
        center,
        zoom: 15,
        controls: []
      }}
      width="500px"
      height="500px"
    >
      {images.map((n) => (
        <Placemark
          key={n}
          geometry={center.map((c) => c + (Math.random() - 0.5))}
          options={{
            iconLayout: "default#image",
            iconImageSize: [50, 50],
            iconImageHref: n
          }}
        />
      ))}
    </Map>
  </YMaps>
);

export default YandexMap;