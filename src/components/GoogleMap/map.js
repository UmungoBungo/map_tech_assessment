import React, { useEffect, useRef, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

function Map(props) {
  const [markersArray, setMarkersArray] = useState([]);
  const [openInfoWindow, setOpenInfoWindow] = useState(null);
  // refs
  const googleMapRef = React.createRef();
  const googleMap = useRef(null);

  // helper functions
  const createGoogleMap = () =>
    new window.google.maps.Map(googleMapRef.current, { disableDefaultUI: true });

  const createMarkers = () => {
    const bounds = new window.google.maps.LatLngBounds();
    const markerArray = []
    allLocation.edges.forEach((edge) => {
      const coordinates = new window.google.maps.LatLng(edge.node.lat, edge.node.lng)
      distanceFromPerth(coordinates).then((distance) => {
        const infowindow = new window.google.maps.InfoWindow({
          content: `<div class='font-bold text-base mb-2 text-orange-700'>${edge.node.name} Store.</div><div class='font-bold text-sm mb-2 text-gray-700'> ${distance} from Perth CBD.</div>`,
        });
        const marker = new window.google.maps.Marker({
          position: coordinates,
          map: googleMap.current,
          id: edge.node.id
        })
        marker.addListener('click', () => {
          googleMap.current.panTo(coordinates)
          googleMap.current.setZoom(16)
          infowindow.open(googleMap.current, marker)
          props.onMapSelectStore(marker.id)
          setOpenInfoWindow(infowindow)
        })
        markerArray.push(marker)
      })

      bounds.extend(coordinates)
    })
    googleMap.current.fitBounds(bounds)
    setMarkersArray(markerArray)
  }

  useEffect(() => {
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GATSBY_GOOGLE_API_KEY}`
    window.document.body.appendChild(googleMapScript);

    googleMapScript.addEventListener('load', () => {
      googleMap.current = createGoogleMap()
      createMarkers()
    })
  }, []);

  useEffect(() => {
    if (props.selectedId) {
      const locationMarker = markersArray.filter((edge) => { return edge.id === props.selectedId })
      openInfoWindow && openInfoWindow.close()
      new window.google.maps.event.trigger(locationMarker[0], 'click')
    }

  }, [props.selectedId]);

  const { allLocation } = useStaticQuery
    (graphql`
      query {
          allLocation {
              edges {
                  node {
                      lat,
                      lng,
                      name,
                      id
                  }
              }
          }
      }
  `)

  const distanceFromPerth = async (coordinates) => {

    const calcDistance = (service, data) => new Promise((resolve, reject) => {
      service.getDistanceMatrix(data, (response, status) => {
        if (status === 'OK') {
          resolve(response.rows[0].elements[0].distance.text)
        } else {
          reject('Error was: ' + status);
        }
      })
    })

    const result = await calcDistance(
      new window.google.maps.DistanceMatrixService(),
      {
        origins: ['CBD, Western Australia'],
        destinations: [coordinates],
        travelMode: 'DRIVING',
        unitSystem: window.google.maps.UnitSystem.METRIC
      }
    )

    return result
  }

  return (
    <div
      id='google-map'
      ref={googleMapRef}
      className='h-full w-full'
    />
  )

}

export default Map;