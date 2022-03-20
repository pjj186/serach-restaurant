/*global kakao*/
import React, { useEffect, useContext } from "react";
import { AppContext } from "../App";

const ResultLocation = ({ res }) => {
  const locContext = useContext(AppContext);

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

      let infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

      var map = new kakao.maps.Map(container, options); // 지도 생성

      const ps = new kakao.maps.services.Places(map);

      ps.keywordSearch(`${res}`, placesSearchCB);

      // 키워드 검색 완료 시 호출되는 콜백함수 입니다
      function placesSearchCB(data, status, pagination) {
        if (status === kakao.maps.services.Status.OK) {
          // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
          // LatLngBounds 객체에 좌표를 추가합니다
          var bounds = new kakao.maps.LatLngBounds();

          for (var i = 0; i < data.length; i++) {
            displayMarker(data[i]);
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
          }

          // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
          map.setBounds(bounds);
        }
      }

      // 지도에 마커를 표시하는 함수입니다
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
    }
  }, [locContext.loading]);

  return (
    <>
      {!locContext.loading ? (
        <div className=" border-4 border-solid">
          <div id="map" style={{ width: "500px", height: "400px" }}></div>
        </div>
      ) : (
        <div>Loading..</div>
      )}
    </>
  );
};

export default ResultLocation;
