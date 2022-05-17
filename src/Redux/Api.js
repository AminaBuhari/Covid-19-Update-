const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com',
    'X-RapidAPI-Key': '56bc7f0923msh90c471b6ca112f0p1012e8jsn4c22e2e02665',
  },
};

const getData = async () => {
  const response = await fetch('https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=US', options);
  const responseData = await response.json();
  return responseData;
};

export default getData;
