interface PersonalAreaProps {
  onClick: () => void;
}

function IconPersonalAriea({ onClick }: PersonalAreaProps) {
  return (
    <div onClick={onClick} className="personal-area-logo">
      <svg
        className="personal-area-logo"
        enableBackground="new 0 0 189.524 189.524"
        viewBox="0 0 189.524 189.524"
        height="3.5rem"
        width="3.5rem"
      >
        <g>
          <g>
            <path
              clipRule="evenodd"
              d="m170.94 151.134c11.678-15.753 18.584-35.256 18.584-56.372 0-52.336-42.427-94.762-94.762-94.762-52.336 0-94.762 42.426-94.762 94.762 0 52.335 42.426 94.762 94.762 94.762 27.458 0 52.188-11.678 69.496-30.339 2.37-2.557 4.602-5.244 6.682-8.051zm-5.254-8.991c9.071-13.552 14.361-29.849 14.361-47.381 0-47.102-38.183-85.286-85.286-85.286-47.101 0-85.285 38.184-85.285 85.286 0 17.533 5.29 33.829 14.362 47.381 11.445-17.098 28.909-29.827 49.361-35.155-9.875-6.843-16.342-18.255-16.342-31.179 0-20.934 16.971-37.905 37.905-37.905s37.905 16.971 37.905 37.905c0 12.923-6.468 24.336-16.342 31.178 20.451 5.329 37.916 18.057 49.361 35.156zm-6.104 8.047c-13.299-21.869-37.353-36.476-64.819-36.476-27.467 0-51.522 14.607-64.821 36.477 15.642 18.275 38.878 29.857 64.82 29.857s49.178-11.583 64.82-29.858zm-64.82-45.952c15.701 0 28.429-12.727 28.429-28.429 0-15.701-12.727-28.429-28.429-28.429s-28.429 12.729-28.429 28.43 12.728 28.428 28.429 28.428z"
              fillRule="evenodd"
              fill="#6fe31d"
            ></path>
          </g>
        </g>
      </svg>
    </div>
  );
}

export default IconPersonalAriea;
