import React from "react";
import { cn } from "../../../lib/utils"; // Ensure you have a utility function for classNames

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  size?: "lg" | "sm";
}

const Title: React.FC<TitleProps> = ({ size = "lg", className, children, ...props }) => {
  return (
    <h1
      className={cn(
        "font-medium text-gray-800 m-0",
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
