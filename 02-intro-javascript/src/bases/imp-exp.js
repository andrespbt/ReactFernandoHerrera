// import heroes, { owners } from '../data/heroes';
import { heroes } from '../data/heroes';

const getHeroeById = id => heroes.find(hero => hero.id === id);

const getHeroeByOwner = owner => heroes.filter(hero => hero.owner === owner);

// const dcHeroes = getHeroeByOwner('DC');

export { getHeroeById, getHeroeByOwner };
