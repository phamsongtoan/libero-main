import { useMemo } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import styles from './option.json'

export default function GMap ({ location = {} }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAZT3IKZws3cysh1X-lNahUHtYNQeOA2mQ'
  })

  if (!isLoaded) return <div>Loading...</div>
  return <Map location={location}/>
}

function Map ({ location = {} }) {
  const center = useMemo(() => ({ lat: location.latitude, lng: location.longitude }), [])

  return (
   <GoogleMap options={{ zoomControl: false, fullscreenControl: false, panControl: false, scaleControl: false, mapTypeControl: false, styles, streetViewControl: false, controlSize: 0 }} zoom={10} center={center} mapContainerClassName="map-container">
     <Marker position={center} />
   </GoogleMap>
  )
}
