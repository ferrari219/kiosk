const isDev = process.env.NODE_ENV !== 'development';
const createStore = () => {
  const middleware = (getDefaultMiddleware) => {
    isDev ? getDefaultMiddleware().concat(logger) : getDefaultMiddleware();
  };
  const store = configureStore({
    middleware,
    devtools: isDev,
  });
  return store;
};
const wrapper = createWrapper(createStore, { debug: isDev });

export default wrapper;
