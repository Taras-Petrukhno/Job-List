import GoogleMapReact from "google-map-react"
import Image from "next/image"
import React from 'react'

interface MapProps {
  coordinate: 
  {
    lat: number,
    lng: number
  }
}

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    lat?: number,
    lng?: number,
  }
}

export default function Map( {coordinate}: MapProps) {

    return(   
            <GoogleMapReact 
            style={{height: '100%', width: '100%'}}
            bootstrapURLKeys={{key: process.env.NEXT_PUBLIC_MAP_API_KEY!}}
            center={coordinate}
            defaultZoom={10}
            options={{
              mapId: process.env.NEXT_PUBLIC_MAP_API_ID,
              zoomControl: false,
              mapTypeControl: false,
              scaleControl: false,
              streetViewControl: false,
              rotateControl: false,
              fullscreenControl: false,
              keyboardShortcuts: false
            }}
            >        
                <Image  lat={coordinate.lat} lng={coordinate.lng} src={'/map-pin.svg'} width={26} height={36} alt="marker" />
            </GoogleMapReact>
    )
}