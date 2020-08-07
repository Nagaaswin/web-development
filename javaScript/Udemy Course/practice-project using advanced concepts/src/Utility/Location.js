const GOOGLE_API_KEY = 'AIzaSyA6e3z_slWH_1eHFFqm9BZAP3RmO6oCs4g';

export async function getCoordsFromAddress(address) {
  const uRLAddress = encodeURI(address);
  const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/xml?address=${uRLAddress}&key=${GOOGLE_API_KEY}
    `);

  if (!response.ok) {
    throw new Error('Failed to fetch the coordinates. Please Try again!!');
  }
  const data = await response.json();
  if (data.error_message) {
    throw new Error(data.error_message);
  }
  const coordinates = data.results[0].geometry.location;
  return coordinates;
}
