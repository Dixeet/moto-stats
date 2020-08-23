const axios = require('axios');

export default function (req, res) {
  axios.defaults.baseURL = 'https://mssproxy.motorsportstats.com/web/3.0.0';
  axios.defaults.headers.common.Referer = 'https://results.motorsportstats.com/';
  axios.defaults.headers.common.Origin = 'https://results.motorsportstats.com/';
  axios
    .get(req.url)
    .then((response) => {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(response.data));
    })
    .catch(() => {
      res.statusCode = 500;
      res.statusMessage = 'Failed to request motorsportstats';
      res.end();
    });
}
