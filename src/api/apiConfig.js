const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "49df62e3fd0e591177401fd9db951848",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
