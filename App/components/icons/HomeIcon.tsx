import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

function HomeIcon(props: any) {
  const {focused, isWhite} = props;

  return focused ? (
    <Svg
      width={25}
      height={33}
      viewBox="0 0 25 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#clip0_158_121)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.265 14.353l-7.5-7.076a1.5 1.5 0 00-2.029-.01l-.01.01-7.491 7.076a1.5 1.5 0 00-.485 1.105v8.667a1.5 1.5 0 001.5 1.5h4.5a1.5 1.5 0 001.5-1.5v-4.5h3v4.5a1.5 1.5 0 001.5 1.5h4.5a1.5 1.5 0 001.5-1.5v-8.667a1.5 1.5 0 00-.485-1.105zm-1.015 9.772h-4.5v-4.5a1.5 1.5 0 00-1.5-1.5h-3a1.5 1.5 0 00-1.5 1.5v4.5h-4.5v-8.667l.01-.01 7.49-7.073 7.49 7.072.01.009v8.669z"
          fill="#0A0A0A"
          stroke="#1C1C1C"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_158_121">
          <Path
            fill="#fff"
            transform="translate(.75 4.625)"
            d="M0 0H24V24H0z"
            stroke="#1C1C1C"
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
      <G clipPath="url(#clip0_158_121)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.265 14.353l-7.5-7.076a1.5 1.5 0 00-2.029-.01l-.01.01-7.491 7.076a1.5 1.5 0 00-.485 1.105v8.667a1.5 1.5 0 001.5 1.5h4.5a1.5 1.5 0 001.5-1.5v-4.5h3v4.5a1.5 1.5 0 001.5 1.5h4.5a1.5 1.5 0 001.5-1.5v-8.667a1.5 1.5 0 00-.485-1.105zm-1.015 9.772h-4.5v-4.5a1.5 1.5 0 00-1.5-1.5h-3a1.5 1.5 0 00-1.5 1.5v4.5h-4.5v-8.667l.01-.01 7.49-7.073 7.49 7.072.01.009v8.669z"
          fill="#0C6EA5"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_158_121">
          <Path
            fill="#fff"
            transform="translate(.75 4.625)"
            d="M0 0H24V24H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default HomeIcon;
