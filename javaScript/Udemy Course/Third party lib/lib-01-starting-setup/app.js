const customers = ['Max', 'Manuel', 'Anna'];
const activeCustomers = ['Max', 'Manuel'];

const inActiveCustomers = _.difference(customers, activeCustomers);

console.log(inActiveCustomers);
