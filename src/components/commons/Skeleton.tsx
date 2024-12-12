import PropTypes from 'prop-types';
import React from 'react';

interface SkeletonProps {
  count?: number; // Jumlah skeleton yang ingin ditampilkan
  width?: string; // Lebar setiap skeleton
  height?: string; // Tinggi setiap skeleton
  borderRadius?: string; // Radius border untuk sudut skeleton
  className?: string; // Kelas tambahan untuk styling
}

const Skeleton: React.FC<SkeletonProps> = ({
  count = 1,
  width = '100%',
  height = '20px', // Default height agar tidak 100%
  borderRadius = '10px',
  className = '',
}) => {
  const skeletonItems = Array.from({ length: count });

  return (
    <div className={`flex flex-col gap-2 ${className}`} aria-hidden="true">
      {skeletonItems.map((_, index) => (
        <div
          key={index}
          className="animate-pulse bg-gray-300"
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
