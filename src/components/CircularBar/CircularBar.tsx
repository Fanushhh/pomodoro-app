import React from 'react';

interface CircularProgressBarProps {
  size: number;
  strokeWidth: number;
  percentage: number;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({ size, strokeWidth, percentage }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="circular-progress-bar"
    >
      <circle
        stroke="var(--dark-blue)"
        fill="transparent"
        strokeWidth={strokeWidth}
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      <circle
        stroke="var(--color-primary)" // Progress bar color
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        r={radius}
        cx={size / 2}
        cy={size / 2}
        className="progress"
      />
    </svg>
  );
};

export default CircularProgressBar;
