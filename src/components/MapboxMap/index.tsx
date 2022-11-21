import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

import { MapboxMapStyled } from './styled';

enum CORD {
  longitude = -90.21453934495386,
  latitude = 32.29406617689779,
}

export function MapboxMap() {
  const map = React.useRef<mapboxgl.Map>();
  const mapNode = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapNode.current as HTMLDivElement,
      accessToken: process.env.REACT_APP_MAPBOX_TOKEN || '',
      style: process.env.REACT_APP_MAPBOX_STYLES || '',
      center: [CORD.longitude, CORD.latitude],
      zoom: 12.9,
    });
  });

  return <MapboxMapStyled ref={mapNode} />;
}
