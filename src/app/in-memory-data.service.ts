import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Rajini' },
      { id: 12, name: 'kamal' },
      { id: 13, name: 'Hirthik' },
      { id: 14, name: 'Aamir khan' },
      { id: 15, name: 'Akshaya Kumar' },
      { id: 16, name: 'Disa pandi' },
      { id: 17, name: 'Diya mirza' },
      { id: 18, name: 'Pretty Zinda' },
      { id: 19, name: 'Vadivel' },
      { id: 20, name: 'vivek' }
    ];
    return {heroes};
  }
}