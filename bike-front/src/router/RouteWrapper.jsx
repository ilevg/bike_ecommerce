const RouteWrapper = ({ Component, ...props }) => {
  return <Component {...props} />;
};

export default RouteWrapper;
