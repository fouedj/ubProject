import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

function AccountIcon(props: any) {
  const {focused, isWhite} = props;
  return focused ? (
    <Svg
      width={25}
      height={33}
      viewBox="0 0 25 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#clip0_168_148)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.25 6.875c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75S22 22.01 22 16.625c-.006-5.382-4.368-9.744-9.75-9.75zM7.195 23.141a6 6 0 0110.11 0 8.234 8.234 0 01-10.11 0zm2.055-7.266a3 3 0 116 0 3 3 0 01-6 0zm9.165 6.226a7.469 7.469 0 00-3.38-2.695 4.5 4.5 0 10-5.57 0 7.469 7.469 0 00-3.38 2.695 8.25 8.25 0 1112.33 0z"
          fill="#1C1C1C"
          stroke="#1C1C1C"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_168_148">
          <Path
            fill="#fff"
            transform="translate(.25 4.625)"
            d="M0 0H24V24H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  ) : (
    <Svg
      width={25}
      height={33}
      viewBox="0 0 25 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#clip0_168_148)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.25 6.875c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75S22 22.01 22 16.625c-.006-5.382-4.368-9.744-9.75-9.75zM7.195 23.141a6 6 0 0110.11 0 8.234 8.234 0 01-10.11 0zm2.055-7.266a3 3 0 116 0 3 3 0 01-6 0zm9.165 6.226a7.469 7.469 0 00-3.38-2.695 4.5 4.5 0 10-5.57 0 7.469 7.469 0 00-3.38 2.695 8.25 8.25 0 1112.33 0z"
          fill="#0C6EA5"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_168_148">
          <Path
            fill="#fff"
            transform="translate(.25 4.625)"
            d="M0 0H24V24H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default AccountIcon;
