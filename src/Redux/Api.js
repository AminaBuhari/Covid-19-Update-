export default class ApiData {
    static getGlobalData = async (dateFrom, dateTo) => {
      const response = await fetch(`https://api.covid19tracking.narrativa.com/api?date_from=${dateFrom}&date_to=${dateTo}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });
      const responseData = await response.json();
      return responseData;
    };

    static getCountry = async (date) => {
      const response = await fetch(`https://api.covid19tracking.narrativa.com/api/${date}`, {
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
