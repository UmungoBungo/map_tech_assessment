import React, { useEffect, useRef } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

function Map(props) {
  // refs
  const googleMapRef = React.createRef();
  const googleMap = useRef(null);
  const marker = useRef(null);

  // helper functions
  const createGoogleMap = () =>
    new window.google.maps.Map(googleMapRef.current, {
      LatLngBounds: [ { lat: -31.997434, lng: 115.762957 } , { lat: -31.889607, lng: 116.010437 } ],
      // zoom: 16,
      // center: {
      //   lat: -31.889607,
      //   lng: 116.010437
      // },
      disableDefaultUI: true,
    });

  const createMarker = (lat, long) =>
    new window.google.maps.Marker({
      position: {
        lat: lat,
        lng: long 
      },
      map: googleMap.current
    });

  // useEffect Hook
  useEffect(() => {
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GATSBY_GOOGLE_API_KEY}`
    window.document.body.appendChild(googleMapScript);

    googleMapScript.addEventListener('load', () => {
      googleMap.current = createGoogleMap();
      allLocation.edges.map(function (edge, i) {
        marker.current = createMarker(edge.node.lat, edge.node.long)
      })
    })
  });

  const { allLocation } = useStaticQuery
  (graphql`
      query {
          allLocation {
              edges {
                  node {
                      lat,
                      long
                  }
              }
          }
      }
  `)

  return (
    <div
      id="google-map"
      ref={googleMapRef}
      className="h-full w-full"
    />
  )

}

export default Map;