import React from 'react';

function LogoutIcon({ fill = '#FDC500', ...otherProps }) {
  return (
    <svg
      {...otherProps}
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6.51465 16H2.51465C1.41008 16 0.514648 15.1046 0.514648 14V2C0.514648 0.895431 1.41008 0 2.51465 0H6.51465V2H2.51465V14H6.51465V16Z" />
      <path d="M11.8422 13.385L13.2624 11.9768L9.34319 8.02422L18.4861 8.02417C19.0384 8.02417 19.4861 7.57645 19.4861 7.02417C19.4861 6.47189 19.0384 6.02417 18.4861 6.02418L9.32392 6.02422L13.3044 2.0774L11.8962 0.657202L5.50527 6.9941L11.8422 13.385Z" />
    </svg>
  );
}

export default LogoutIcon;
