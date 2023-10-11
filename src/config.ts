const BASE_URL = 'https://restcountries.com/v2/';
export const ALL_COUNTRIES = BASE_URL + 'all?fields=name,capital,flags,population,region';

export const searchByCountry = (countryName?: string) => BASE_URL + '/name/' + countryName;

export const filterByCode = (codes?: string[]) => BASE_URL + 'alpha?codes=' + codes?.join(',');
