import Route from '@ember/routing/route';

import { inject } from '@ember/service';

export default class RentalRoute extends Route {
  @inject store;

  async model(params) {
    return this.store.findRecord('rental', params.rental_id);
  }
}
