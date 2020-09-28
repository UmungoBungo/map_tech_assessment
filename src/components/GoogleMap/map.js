import React, { useEffect, useRef } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

function Map(props) {
  // refs
  const googleMapRef = React.createRef();
  const googleMap = useRef(null);

  // helper functions
  const createGoogleMap = () =>
    new window.google.maps.Map(googleMapRef.current, {
      // LatLngBounds: [(-31.997434, 115.762957), (-31.889607, 116.010437)],
      zoom: 16,
      center: {
        lat: -31.889607,
        lng: 116.010437
      },
      disableDefaultUI: true,
    });

  const setMarkers = () => {
    var bounds = new window.google.maps.LatLngBounds();
    allLocation.edges.forEach( (edge) => {
      const coordinates = new window.google.maps.LatLng(edge.node.lat, edge.node.long)
      const infowindow = new window.google.maps.InfoWindow({
        content: `${edge.node.name} Store`,
      });
      const marker = new window.google.maps.Marker({
        position: coordinates,
        map: googleMap.current
      })
      marker.addListener("click", () => {
        googleMap.current.panTo(coordinates)
        googleMap.current.setZoom(16)
        infowindow.open(googleMap.current, marker)
      })
      bounds.extend(coordinates)
    })
    googleMap.current.fitBounds(bounds)
  }


  // useEffect Hook
  useEffect(() => {
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GATSBY_GOOGLE_API_KEY}`
    window.document.body.appendChild(googleMapScript);

    googleMapScript.addEventListener('load', () => {
      googleMap.current = createGoogleMap()
      setMarkers()
    })
  });

  const { allLocation } = useStaticQuery
    (graphql`
      query {
          allLocation {
              edges {
                  node {
                      lat,
                      long,
                      name
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