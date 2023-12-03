import { Container as MapDiv, NaverMap, Marker } from "react-naver-maps";
import { useState } from "react";
import { styled } from "styled-components";

import Jimventory from "../components/Jimventory";

import serviceData from "../Data/ServiceData";

import MyLocationIcon from "../image/MyLocation.png";
import MarkerIcon from "../image/MarkerIcon.png";
import UserIcon from "../image/UserIcon.png";

const CurrentLocationButton = styled.button`
  position: absolute;
  padding: 18px;
  border: none;
  border-radius: 50px;
  box-shadow: rgba(84, 84, 85, 0.8) 0px 0px 8px;
  background-image: url(${MyLocationIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 26px 26px;
  background-color: white;
  bottom: 14px;
  right: 10px;
  width: 20px;
  &:hover {
    transform: translateY(1px);
  }
  &:hover:before {
    width: 0;
  }
`;
function Main() {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCenterToCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <MapDiv
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <Jimventory
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
      <NaverMap defaultZoom={18} center={currentLocation}>
        {currentLocation && (
          <Marker
            position={currentLocation}
            icon={{
              url: UserIcon, // 아이콘 이미지 URL
              anchor: { x: 12, y: 36 }, // 앵커포인트 위치 (중심점 기준)
              scaledSize: { width: 36, height: 36 }, //조절된 크기
            }}
          />
        )}
        {serviceData.map((storage, index) => (
          <div key={index}>
            <Marker
              position={{
                lat: storage.latitude,
                lng: storage.longitude,
              }}
              onClick={() => setSelectedItem(storage)}
              icon={{
                url: MarkerIcon, // 아이콘 이미지 URL
                anchor: { x: 12, y: 36 }, // 앵커포인트 위치 (중심점 기준)
                scaledSize: { width: 30, height: 30 }, //조절된 크기
              }}
            />
          </div>
        ))}
      </NaverMap>
      <CurrentLocationButton onClick={handleCenterToCurrentLocation} />
    </MapDiv>
  );
}

export default Main;
