const configApi = {
  hostname: process.env.REACT_APP_APISERVER
}

class Api {
  constructor ({ hostname }) {
    this.hostname = hostname
  }

  _handleResponse (response) {
    if (response.ok) {
      return response.json()
    } else {
      console.error(response.status)
      return Promise.reject(response.statusText)
    }
  }

  _handleError (error) {
    console.error(error)
    return Promise.reject(error.message)
  }

  getPosts () {
    return fetch(`${this.hostname}/posts`, { headers: {} })
      .then(this._handleResponse)
      .catch(this._handleError)
  }
}

const api = new Api(configApi)

export default api
