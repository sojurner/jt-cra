import React from 'react';
import Loading from '../../atoms/Loading';
import { withRouter } from 'react-router-dom';

const LoadingWrapper = ({ children, history }) => {
  const [loading, setLoading] = React.useState(false);

  const Delay = event => {
    toggleLoading();
    event.preventDefault();

    setTimeout(() => history.push(children.props.to), 2000);
    toggleLoading();
  };

  const toggleLoading = () => setLoading(!loading);

  return (
    <>
      {loading && <Loading />}
      {React.cloneElement(children, {
        onClick: Delay
      })}
    </>
  );
};

const LoadingWrappedRouter = withRouter(LoadingWrapper);

export default LoadingWrappedRouter;
