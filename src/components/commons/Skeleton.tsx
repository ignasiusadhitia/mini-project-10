import PropTypes from 'prop-types';
import React from 'react';

interface SkeletonProps {
  count?: number;
  width?: string;
  height?: string;
  borderRadius?: string;
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({
  count = 1,
  width = '100%',
  height = '100%',
  borderRadius = '10px',
  className = '',
}) => {
  const skeletonItems = Array.from({ length: count });

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {skeletonItems.map((_, index) => (
        <div
          key={index}
          className="animate-pulse"
          style={{
            width,
            height,
            borderRadius,
          }}
        />
      ))}
    </div>
  );
};

Skeleton.propTypes = {
  count: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
  borderRadius: PropTypes.string,
  className: PropTypes.string,
};

export default Skeleton;
