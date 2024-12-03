export default function IconButton({ onClick }) {
  return (
    <button onClick={onClick} className="icon-button" aria-label="Add">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="clip1_104">
            <rect
              width="31"
              height="31"
              rx="0"
              transform="translate(0.5 0.5)"
              fill="white"
              fillOpacity="0"
            />
          </clipPath>
        </defs>
        <rect
          width="31"
          height="31"
          rx="0"
          transform="translate(0.5 0.5)"
          fill="#FFFFFF"
          fillOpacity="0"
        />
        <g clipPath="url(#clip1_104)">
          <path
            d="M28 16C28 16.26 27.89 16.51 27.7 16.7C27.51 16.89 27.26 17 27 17L17 17L17 27C17 27.26 16.89 27.51 16.7 27.7C16.51 27.89 16.26 28 16 28C15.73 28 15.48 27.89 15.29 27.7C15.1 27.51 15 27.26 15 27L15 17L5 17C4.73 17 4.48 16.89 4.29 16.7C4.1 16.51 4 16.26 4 16C4 15.73 4.1 15.48 4.29 15.29C4.48 15.1 4.73 15 5 15L15 15L15 5C15 4.73 15.1 4.48 15.29 4.29C15.48 4.1 15.73 4 16 4C16.26 4 16.51 4.1 16.7 4.29C16.89 4.48 17 4.73 17 5L17 15L27 15C27.26 15 27.51 15.1 27.7 15.29C27.89 15.48 28 15.73 28 16Z"
            fill="currentColor"
          />
        </g>
      </svg>
    </button>
  );
}
