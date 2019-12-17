const base_url = 'https://lazerbubbles-api.herokuapp.com';

const api_routes = {
    load_user: base_url + '/user',
    login: base_url + '/login',
    sandboxes: base_url + '/sandboxes',
    sandbox_data: base_url + '/sandbox/data'
}

export default api_routes;