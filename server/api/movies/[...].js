export default defineEventHandler((event) => {
  const id = [...event.node.req.url.split("/")].pop();
  const config = useRuntimeConfig();
  console.log('api access token: ' + apiAccessToken)
  return $fetch(`${config.public.apiBaseUrl}/movie/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${config.apiAccessToken}`,
    },
  });
});
