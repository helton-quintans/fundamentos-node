// ?search=Helton&page=2&limit=10

export function extractQueryParams(query) {
  return query.substr(1).split('&').reduce((queryParams, param) => {
    // split('&') => ['search=Helton', 'page=2', 'limit=10']
    const [key, value] = param.split('=')
    // split('=') => ['search', 'Helton']
    queryParams[key] = value
    
    return queryParams
  }, {})
}