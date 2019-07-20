import React from 'react';

const ToggleSwitch = ({ children }) => {
  const [toggled, setToggled] = React.useState(false);

  const handleToggle = () => setToggled(!toggled);

  const renderProps = () => ({
    handleToggle,
    toggled
  });

  return children(renderProps());
};

const Toggle = props => {
  return <button {...props} />;
};

export { ToggleSwitch, Toggle as default };
