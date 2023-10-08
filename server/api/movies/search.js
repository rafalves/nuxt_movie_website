export default defineEventHandler((event) => {
    const  { query, page } = getQuery(event);
    const config = useRuntimeConfig();
    console.log('api access token: ' + config.apiAccessToken)
    return $fetch(`${config.public.apiBaseUrl}/search/movie?query=${query}&page=${page}`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${config.apiAccessToken}`
        }
    })
})