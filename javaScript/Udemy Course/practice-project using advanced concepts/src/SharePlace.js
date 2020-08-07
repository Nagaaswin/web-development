import { Modal } from './UI/Modal';
import { Map } from './UI/Map';
import { getCoordsFromAddress } from './Utility/Location';

class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector('#place-data form');
    const locateUserBtn = document.getElementById('locate-btn');

    locateUserBtn.addEventListener('click', this.locateUserHandler.bind(this));
    addressForm.addEventListener('submit', this.findAddressHandler.bind(this));
  }

  Place(coordinates) {
    if (this.map) {
      this.map.render(coordinates);
    } else {
      this.map = new Map(coordinates);
    }
  }

  locateUserHandler() {
    if (!navigator.geolocation) {
      alert(
        'Location feature is not available in your browser,use other browser or manually enter the Address.'
      );
      return;
    }
    const modal = new Modal(
      'loading-modal-content',
      'Loading location- PleaseWait!!'
    );
    modal.show();
    navigator.geolocation.getCurrentPosition(
      (success) => {
        modal.hide();
        const coordinates = {
          lat: success.coords.latitude,
          lng: success.coords.longitude,
        };
        this.Place(coordinates);
      },
      (error) => {
        modal.hide();
        alert(
          'Could not locate you unfortunatly.Kindly enter the address manually.'
        );
      }
    );
  }

  async findAddressHandler(event) {
    event.preventDefault();
    const address = document.querySelector('input').value;
    if (!address || address.trim() === 0) {
      alert('invalid address entered!');
      return;
    }
    const modal = new Modal(
      'loading-modal-content',
      'Loading location- PleaseWait!!'
    );
    try {
      modal.show();
      const coordinates = getCoordsFromAddress(address);
      this.Place(coordinates);
    } catch (err) {
      alert(err);
    }
    modal.hide();
  }
}

const placeFinder = new PlaceFinder();
