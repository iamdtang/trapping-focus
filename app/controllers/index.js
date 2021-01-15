import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class IndexController extends Controller {
  @tracked isModalOpen = false;
  @tracked countries = ['United States', 'Spain', 'Portugal'];
  @tracked country = null;

  @action
  openModal() {
    this.isModalOpen = true;
  }

  @action
  setCountry(country) {
    this.country = country;
  }
}
