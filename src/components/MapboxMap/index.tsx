import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import { MapboxMapStyled } from './styled';

enum CORD {
  longitude = -90.21453934495386,
  latitude = 32.29406617689779,
}

export function MapboxMap() {
  const [, setMap] = useState<mapboxgl.Map>();
  const mapNode = useRef(null);

  useEffect(() => {
    const node = mapNode.current;
    if (typeof window === 'undefined' || node === null) return;

    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken: process.env.REACT_APP_MAPBOX_TOKEN || '',
      style: process.env.REACT_APP_MAPBOX_STYLES || '',
      center: [CORD.longitude, CORD.latitude],
      zoom: 12.9,
      attributionControl: false,
    });

    setMap(mapboxMap);

    return () => {
      mapboxMap.remove();
    };
  }, []);

  return <MapboxMapStyled ref={mapNode} />;
}
