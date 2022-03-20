/*global kakao*/
import React, { useEffect, useContext } from "react";
import { AppContext } from "../App";

let resArr = [];

const Location = ({ category }) => {
  const locContext = useContext(AppContext);

  const getResArr = (arr) => {
    locContext.setCurrArr(arr);
  };

  const resetResArr = () => {
    resArr = [];
  };

  console.log(locContext);
  useEffect(() => {
    if (!locContext.loading) {
      var container = document.getElementById("map");

      var options = {
        center: new kakao.maps.LatLng(
          locContext.location.latitude,
          locContext.location.longitude
        ), // 현재위치
        level: 4,
      };

      var imageSrc =
          "https://cdn2.iconfinder.com/data/icons/flat-master-2/32/map_pin-512.png", // 마커이미지의 주소입니다
        imageSize = new kakao.maps.Size(40, 40), // 마커이미지의 크기입니다
        imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

      var markerImage = new kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption
        ),
        markerPosition = new kakao.maps.LatLng(
          locContext.location.latitude,
          locContext.location.longitude
        ); // 마커가 표시될 위치입니다

      let infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

      var map = new kakao.maps.Map(container, options); // 지도 생성

      const ps = new kakao.maps.services.Places(map);

      ps.categorySearch("FD6", placesSearchCB, { useMapBounds: true });

      function placesSearchCB(data, status, pagination) {
        if (status === kakao.maps.services.Status.OK) {
          for (var i = 0; i < data.length; i++) {
            if (data[i].category_name.includes(category)) {
              resArr.push(data[i]);
              displayMarker(data[i]);
            }
          }
          getResArr(resArr);
          resetResArr();
        }
      }

      function displayMarker(place) {
        // 마커를 생성하고 지도에 표시합니다
        var marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(place.y, place.x),
        });

        // 마커에 클릭이벤트를 등록합니다
        kakao.maps.event.addListener(marker, "click", function () {
          // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
          infowindow.setContent(
            '<div style="padding:5px;font-size:12px;">' +
              place.place_name +
              "</div>"
          );
          infowindow.open(map, marker);
        });
      }
      var marker = new kakao.maps.Marker({
        position: markerPosition,
        image: markerImage, // 마커이미지 설정
      });
      marker.setMap(map);
    }
  }, [locContext.loading]);

  return (
    <>
      {!locContext.loading ? (
        <div className=" border-4 border-solid">
          <div id="map" style={{ width: "500px", height: "400px" }}></div>
        </div>
      ) : (
        <div className="w-[500px] h-[408px] flex items-center justify-center">
          <span className=" text-2xl">Loading..</span>
        </div>
      )}
    </>
  );
};

export default Location;
