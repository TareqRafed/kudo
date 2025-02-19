export const splitURL = (url: string) => {
  const cleanUrl = url.replace(/^https?:\/\/(www\.)?/, '');
  const [domain, ...rest] = cleanUrl.split('/');
  const path = rest.join('/');
  const [basePath, queryString] = path.split('?');
  const queryParams = queryString
    ? queryString.split('&').map((param) => {
        const [key, value] = param.split('=');
        return { key, value };
      })
    : [];

  return {
    domain,
    basePath,
    queryParams,
  };
};
