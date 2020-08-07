export class Map {
  constructor(coords) {
    //this.coordinates = coords;
    this.render(coords);
  }

  render(coords) {
    if (!google) {
      alert('Could not load maps library - please try again later');
    }
    const map = new google.maps.Map(document.getElementById('map'), {
      center: coords,
      zoom: 16,
    });

    new google.maps.Marker({ position: coords, map: map });
  }
}
