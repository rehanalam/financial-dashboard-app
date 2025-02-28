import Title from '@/components/Title';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface GridSectionProps {
  title: string;
  children: ReactNode;
  colSpan: string;
  showSeeAll?: boolean;
}

const GridSection = ({ title, children, colSpan, showSeeAll = false }: GridSectionProps) => {
  return (
    <div className={`${colSpan} flex flex-col space-y-5`}>
      <div className="flex items-center justify-between">
        <Title size="sm">{title}</Title>
        {showSeeAll && (
          <Link to="/credit-cards">
            <Title size="sm" className="text-right !text-lg !font-[400] hover:text-blue-800/80">
              See All
            </Title>
          </Link>
        )}
      </div>
      <div className="flex w-full gap-7">{children}</div>
    </div>
  );
};

export default GridSection;
