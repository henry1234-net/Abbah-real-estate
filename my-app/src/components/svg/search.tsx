import React from 'react';

interface SearchSvgProps {
  className?: string;
  width: string;
  height: string;
  fill?: string;
}

const Search: React.FC<SearchSvgProps> = ({ className, width, height, fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width={width}
    height={height}
    className={className}
    fillRule="nonzero"
  >
    <g fill={fill || 'white'} fillRule="nonzero">
      <g transform="scale(4,4)">
        <path d="M24,2.88867c-11.63429,0 -21.11133,9.47705 -21.11133,21.11133c0,11.63428 9.47704,21.11133 21.11133,21.11133c5.03655,0 9.6647,-1.77999 13.29883,-4.73828l14.83203,18.58008c0,0 3.24862,0.48286 5.26563,-1.61914c2.031,-2.118 1.55469,-5.19922 1.55469,-5.19922l-18.57812,-14.83594c2.95829,-3.63413 4.73828,-8.26228 4.73828,-13.29883c0,-11.63428 -9.47704,-21.11133 -21.11133,-21.11133zM24,7.11133c9.35255,0 16.88867,7.53613 16.88867,16.88867c0,9.35254 -7.53612,16.88867 -16.88867,16.88867c-9.35255,0 -16.88867,-7.53613 -16.88867,-16.88867c0,-9.35254 7.53612,-16.88867 16.88867,-16.88867z"
        id="Search"
        className="svg-path4"></path>
      </g>
    </g>
  </svg>
);

export default Search;