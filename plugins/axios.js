export default function ({ $axios, redirect }) {
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  });

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status);
    if (code === 400) {
      redirect('/400')
    }
  });

  $axios.setHeader('Access-Control-Allow-Origin', '*');
  $axios.setHeader('Access-Control-Allow-Credentials', 'true');
  $axios.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT' );
  $axios.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  $axios.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
}
