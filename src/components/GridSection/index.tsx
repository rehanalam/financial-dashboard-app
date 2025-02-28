import Title from '@/components/Title';
import React, { ReactNode } from 'react';

interface GridSectionProps {
  title: string;
  children: ReactNode;
  colSpan: string; // Tailwind CSS column span classes
  showSeeAll?: boolean;
}

const GridSection: React.FC<GridSectionProps> = ({ title, children, colSpan, showSeeAll = false }) => {
  return (
    <div className={`${colSpan} flex flex-col space-y-5`}>
      <div className="flex items-center justify-between">
        <Title size="sm">{title}</Title>
        {showSeeAll && (
          <Title size="sm" className="text-right !text-lg">
            See All
          </Title>
        )}
      </div>
      <div className="flex w-full gap-7">{children}</div>
    </div>
  );
};

export default GridSection;
