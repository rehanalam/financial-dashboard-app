import classNames from 'classnames';

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  size?: 'lg' | 'md' | 'sm';
}

const sizeClasses = {
  sm: 'text-lg md:text-lg',
  md: 'text-2xl md:text-2xl',
  lg: 'text-3xl md:text-3xl',
};

const Title = ({ size = 'lg', className, children, ...props }: TitleProps) => {
  return (
    <h1 className={classNames('m-0 font-semibold text-blue-800', sizeClasses[size], className)} {...props}>
      {children}
    </h1>
  );
};

export default Title;
