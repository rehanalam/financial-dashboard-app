import classNames from 'classnames';

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  size?: "lg" | "sm";
}

const Title = ({ size = "lg", className, children, ...props }: TitleProps) => {
  return (
    <h1
      className={classNames(
        "font-medium text-blue-800 m-0",
        size === "lg" ? "text-3xl md:text-3xl" : "text-2xl md:text-xl",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

export default Title;
