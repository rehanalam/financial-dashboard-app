import React from 'react';

interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-[50px] h-[50px]',
};

const Avatar: React.FC<AvatarProps> = ({ src, alt, name = 'User', size = 'md' }: AvatarProps) => {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="relative flex items-center">
      {src ? (
        <img src={src} alt={alt || name} className={`max-w-none rounded-full object-cover ${sizeClasses[size]}`} />
      ) : (
        <div
          className={`flex items-center justify-center rounded-full bg-gray-300 font-medium text-white ${sizeClasses[size]}`}
        >
          {getInitials(name)}
        </div>
      )}
    </div>
  );
};

export default Avatar;
