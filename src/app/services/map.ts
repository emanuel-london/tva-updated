export interface IMarkers {
    type: string;
    coordinates: number[];
}

export interface IGeoJson {
    type: string;
    makers: IMarkers;
    properties?: any;
    $key?: string;
}
export class FeatureCollection {
  type = 'FeatureCollection';
  constructor(public features: Array<GeoJson>) {}
}

export class GeoJson implements IGeoJson {
  type = 'Feature';
  makers: IMarkers;

  constructor(coordinates, public properties?) {
    this.makers = {
      type: 'Point',
      coordinates: coordinates
    };
  }
}
