export default class ApiData {
    static countryURL = 'https://api.covid19tracking.narrativa.com/api/2022-03-10';

    static getCountry = async () => {
      const response = await fetch(this.countryURL, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });
      const responseData = await response.json();
      return responseData;
    };

    static getRegions = async (date, country) => {
      const response = await fetch(`https://api.covid19tracking.narrativa.com/api/${date}/country/${country}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });
      const responseData = await response.json();
      return responseData;
    };
}
