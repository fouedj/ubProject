import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

function ChatIcon(props: any) {
  const {focused, isWhite} = props;
  return focused ? (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#clip0_158_140)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.75 2.875a9.75 9.75 0 00-8.608 14.332L3.078 20.4a1.5 1.5 0 001.897 1.897l3.193-1.064A9.75 9.75 0 1012.75 2.875zM8.625 13.75a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zm4.125 0a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zm4.125 0a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25z"
          fill="#1C1C1C"
          stroke="#1C1C1C"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_158_140">
          <Path
            fill="#fff"
            transform="translate(.75 .625)"
            d="M0 0H24V24H0z"
            stroke="#1C1C1C"
          />
        </ClipPath>
      </Defs>
    </Svg>
  ) : (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#clip0_158_140)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.75 2.875a9.75 9.75 0 00-8.608 14.332L3.078 20.4a1.5 1.5 0 001.897 1.897l3.193-1.064A9.75 9.75 0 1012.75 2.875zM8.625 13.75a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zm4.125 0a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zm4.125 0a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25z"
          fill="#0C6EA5"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_158_140">
          <Path fill="#fff" transform="translate(.75 .625)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ChatIcon;
