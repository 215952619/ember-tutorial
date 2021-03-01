import Component from '@glimmer/component';

export default class RentalFilterComponent extends Component {
  get results() {
    let { rentals, query } = this.args;

    if (query) {
      rentals = rentals.filter((rental) =>
        rental.title.toLowerCase().includes(query)
      );
    }

    return rentals;
  }
}
