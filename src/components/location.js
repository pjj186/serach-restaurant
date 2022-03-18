/*global kakao*/
import React, { useEffect, useContext } from "react";
import { AppContext } from "../App";

const Location = () => {
  const locContext = useContext(AppContext);
  //   console.log(locContext.location.latitude);
  //   console.log(locContext.location.longitude);
  console.log(locContext);
  useEffect(() => {
    if (!locContext.loading) {
      var container = document.getElementById("map");
      var options = {
        center: new kakao.maps.LatLng(
          locContext.location.latitude,
          locContext.location.longitude
        ), // 현재위치
        level: 3,
      };

      var map = new kakao.maps.Map(container, options);
      var markerPosition = new kakao.maps.LatLng(
        locContext.location.latitude,
        locContext.location.longitude
      ); // 현재위치 마커
      var marker = new kakao.maps.Marker({
        position: markerPosition,
      });
      marker.setMap(map);
    }
  }, [locContext.loading]);

  return (
    <>
      {!locContext.loading ? (
        <div>
          <div id="map" style={{ width: "500px", height: "400px" }}></div>
        </div>
      ) : (
        <div>Loading..</div>
      )}
    </>
  );
};

export default Location;
