//create a component called HeaderTitle.tsx.tsx use typescript, it will have a prop of a title
// and it will display the title in an h1 tag
import React from 'react';

interface HeaderTitleProps {
  title: string;
  className?: string;
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({ title, className }) => {
  return <header className={className}><h1>{title}</h1></header>;
};

export default HeaderTitle;