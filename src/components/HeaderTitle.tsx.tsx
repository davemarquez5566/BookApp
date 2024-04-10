import React from "react";

interface HeaderTitleProps {
  title: string;
  className?: string;
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({ title, className }) => {
  return (
    <header className={className}>
      <h1>{title}</h1>
    </header>
  );
};

export default HeaderTitle;
