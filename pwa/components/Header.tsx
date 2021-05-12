/* eslint-disable react/no-unknown-property */
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

import NavBar from './Navbar';

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.quaternary};
  padding: 1.9rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1``;

const LinkLogo = styled.a``;

const BlackOrGreyPath = styled.path`
  fill: ${({ theme }) => (theme.colors.tertiary === '#1E1F2F' ? theme.colors.primary : 'black')};
`;
const VioletOrWhitePath = styled.path`
  fill: ${({ theme }) => (theme.colors.tertiary === '#1E1F2F' ? theme.colors.primary : '#3F005F')};
`;

const BookMyMentorLogo = () => (
  <svg width="250" height="45" viewBox="0 0 289 45" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0)">
      <path
        d="M1.24438 41.5755C1.2497 42.4138 1.93951 43.0953 2.77728 43.09L40.7056 42.8493C41.5434 42.844 42.2245 42.1537 42.2192 41.3155L41.9783 3.36456C41.973 2.52629 41.2832 1.84478 40.4454 1.8501L2.51709 2.0908C1.67932 2.09611 0.998219 2.78632 1.00354 3.6246L1.24438 41.5755Z"
        fill="#E31B84"
      />
      <path d="M26.9273 20.0128L16.6151 20.0782L21.8368 29.1903L26.9273 20.0128Z" fill="#00FFFF" />
      <path d="M21.6874 20.0461L16.6151 20.0782L21.8368 29.1903L21.6874 20.0461Z" fill="white" />
      <path
        d="M12.501 17.498L12.5009 17.4828L12.5005 17.4218L12.4356 7.1949L3.34409 12.3891L12.455 17.4526L3.40909 22.6313L12.5659 27.725L12.501 17.498L21.5967 22.5616L12.5659 27.725L14.6769 21.9196L21.5812 22.516L21.7032 22.5457L21.5924 12.2886L12.501 17.498Z"
        fill="#00FFFF"
      />
      <path
        d="M21.7032 22.5456L21.6114 22.4853L21.5503 22.4552L12.5009 17.4827L12.5662 27.7706L21.7032 22.5456L27.8466 23.2687L30.4943 27.6111L21.7032 22.5456L30.6113 17.2459L30.4943 27.6111L39.5095 22.4021L30.6567 17.1999L30.6108 17.1697L21.5923 12.2733L21.7032 22.5456Z"
        fill="white"
      />
      <path d="M3.34409 12.389L3.40908 22.6312L12.5009 17.4827L3.34409 12.389Z" fill="white" />
      <path d="M30.4943 27.6112L30.4831 37.8539L39.2556 32.7988L30.4943 27.6112Z" fill="white" />
      <path d="M12.4355 7.17957L12.5009 17.4827L21.6076 12.2731L12.4355 7.17957Z" fill="white" />
      <path d="M30.6066 6.91187L30.672 17.215L39.7635 12.0055L30.6066 6.91187Z" fill="white" />
      <path d="M21.7032 22.5456L30.4943 27.6111L30.6715 17.1388L21.7032 22.5456Z" fill="#00FFFF" />
      <path d="M3.35935 12.389L12.5009 17.4828L12.4356 7.17962L3.35935 12.389Z" fill="#00FFFF" />
      <path d="M21.5924 12.2733L30.672 17.2151L30.6066 6.89668L21.5924 12.2733Z" fill="#00FFFF" />
      <path d="M30.672 17.215L39.5096 22.4022L39.7635 12.0056L30.672 17.215Z" fill="#00FFFF" />
      <path d="M30.4943 27.6111L39.2556 32.7988L39.5095 22.3869L30.4943 27.6111Z" fill="#00FFFF" />
      <path d="M12.7481 27.6324L3.42355 22.5093L3.64145 32.8419L12.7481 27.6324Z" fill="white" />
      <path d="M12.5958 27.6333L3.64146 32.8419L12.6771 38.043L12.5958 27.6333Z" fill="#00FFFF" />
    </g>
    <g clipPath="url(#clip1)">
      <path
        d="M130.664 41.2598C130.671 42.3701 131.544 43.2729 132.603 43.2662L141.248 43.2113C142.307 43.2046 143.167 42.2908 143.16 41.1805L143.103 32.218C143.096 31.1078 142.224 30.2049 141.165 30.2116L132.52 30.2665C131.461 30.2732 130.6 31.1871 130.608 32.2973L130.664 41.2598Z"
        fill="#E31B84"
      />
      <path
        d="M138.226 37.3965L133.336 37.4276C133.375 37.5888 133.453 37.7296 133.55 37.8703C133.9 38.3728 134.46 38.672 135.096 38.668C135.712 38.6641 136.25 38.4184 136.535 37.8917L138.133 37.8816C137.737 39.1155 136.452 39.9917 135.104 40.0002C133.217 40.0122 131.764 38.6084 131.753 36.8118C131.741 34.9951 133.138 33.553 135.044 33.5409C136.892 33.5291 138.307 34.9131 138.318 36.6692C138.319 36.8913 138.282 37.1539 138.226 37.3965ZM135.052 34.853C134.128 34.8588 133.496 35.3877 133.271 36.2572L136.756 36.235C136.615 35.3679 135.977 34.8471 135.052 34.853Z"
        fill="#00FFFF"
      />
      <path
        d="M140.877 36.3502L140.898 39.7414L139.396 39.751L139.358 33.6952L140.744 33.6864L140.748 34.2112L140.767 34.2111C141.187 33.623 141.494 33.4596 142.245 33.4548L142.254 34.8678C141.253 34.9347 140.871 35.462 140.877 36.3502Z"
        fill="#00FFFF"
      />
      <VioletOrWhitePath d="M124.411 32.7808L122.851 32.7906L122.902 40.8448L124.462 40.8349L124.411 32.7808Z" />
      <VioletOrWhitePath d="M128.405 34.1684L128.447 40.8297L126.888 40.8396L126.846 34.1783L125.305 34.188L125.296 32.775L129.975 32.7453L129.984 34.1583L128.405 34.1684Z" />
      <path
        d="M90.9124 33.5989C91.1227 33.3553 91.3328 33.0915 91.5624 32.868C92.1176 32.3598 92.7706 32.0933 93.5023 32.1088C94.9658 32.1197 96.2051 33.2221 96.4266 34.7549C96.5678 35.7633 96.3037 36.633 95.6343 37.3438C95.0224 38.0139 94.3718 38.6438 93.7405 39.2938C92.9561 40.086 92.1718 40.8985 91.3874 41.6907C91.1195 41.9549 90.8885 41.9765 90.6366 41.7157C89.2416 40.3519 87.8657 38.9677 86.4707 37.6039C86.0831 37.2026 85.7529 36.7606 85.5762 36.2166C85.3405 35.4914 85.413 34.7844 85.6782 34.0964C86.0759 33.0442 86.823 32.4338 87.8807 32.2252C89.1308 31.9952 90.1349 32.4532 90.8735 33.5386C90.8735 33.5386 90.893 33.5788 90.9124 33.5989ZM86.7462 35.5027C86.7461 35.4825 86.7459 35.4623 86.7458 35.4421C86.7814 34.9776 86.9133 34.5327 87.2192 34.1875C87.4295 33.944 87.6591 33.7205 87.8887 33.4969C87.9079 33.4766 87.9462 33.4562 87.9846 33.4358L87.9459 33.3956C87.4268 33.5201 87.0051 33.8255 86.7388 34.3319C86.5485 34.6965 86.5318 35.1003 86.7462 35.5027Z"
        fill="#E31B84"
      />
      <path
        d="M86.7462 35.5027C86.5511 35.1002 86.5678 34.6964 86.7579 34.3116C87.0242 33.8052 87.4266 33.4999 87.965 33.3754L88.0038 33.4155C87.9654 33.4359 87.927 33.4563 87.9079 33.4767C87.6782 33.7002 87.4486 33.9237 87.2383 34.1673C86.9326 34.5326 86.8005 34.9573 86.7649 35.4218C86.7459 35.4623 86.7461 35.4825 86.7462 35.5027Z"
        fill="white"
      />
      <BlackOrGreyPath d="M56.5531 41.3265L56.502 33.2723L56.4635 33.2725L53.4532 41.3461L52.6445 41.3513L49.5128 33.3166L49.4935 33.3167L49.5446 41.3709L48.2161 41.3794L48.1555 31.8314L50.2542 31.8181L53.0348 39.1282L55.7223 31.7834L57.821 31.7701L57.8816 41.318L56.5531 41.3265Z" />
      <BlackOrGreyPath d="M65.2174 41.2715L65.2104 40.1612L65.1911 40.1614C64.7152 41.0122 63.8515 41.4618 62.8888 41.4679C60.8864 41.4806 59.2591 39.9164 59.246 37.8574C59.2123 35.5765 60.7809 33.9516 62.7833 33.9389C63.7845 33.9326 64.6149 34.3109 65.1591 35.1149L65.1784 35.1148L65.172 34.1055L66.4427 34.0974L66.4881 41.2432L65.2173 41.2513L65.2174 41.2715ZM65.2141 37.7186C65.2053 36.3258 64.2352 35.1611 62.8296 35.17C61.5589 35.1781 60.5072 36.3354 60.5162 37.7484C60.5246 39.0807 61.5719 40.2651 62.8619 40.2569C64.1903 40.2283 65.2227 39.0711 65.2141 37.7186Z" />
      <BlackOrGreyPath d="M68.276 31.7037L69.5467 31.6957L69.6073 41.2436L68.3366 41.2517L68.276 31.7037ZM72.3607 41.2261L69.6031 37.5495L72.0072 34.0823L73.5283 34.0726L71.0659 37.4594L73.9587 41.216L72.3607 41.2261V41.2261Z" />
      <BlackOrGreyPath d="M75.2876 38.2198C75.5839 39.409 76.4937 40.1703 77.5335 40.1637C78.3421 40.1586 79.0902 39.7097 79.4705 38.9604L80.7413 38.9523C80.2308 40.4292 78.9468 41.3861 77.4835 41.3954C75.5581 41.4076 74.0065 39.6411 73.9943 37.7234C73.98 35.4626 75.5873 33.8778 77.3972 33.8663C79.3996 33.8536 80.9311 35.479 80.944 37.5178C80.9454 37.7398 80.9467 37.9417 80.9097 38.1842L75.2876 38.2198V38.2198ZM79.6902 37.1624C79.5862 35.9518 78.5601 35.0701 77.4627 35.0771C76.4229 35.0837 75.3695 35.9584 75.281 37.1904L79.6902 37.1624Z" />
      <BlackOrGreyPath d="M104.072 41.0249L104.011 31.4769L105.282 31.4689L105.304 34.8601L105.323 34.86C105.876 34.0692 106.74 33.66 107.645 33.6542C109.571 33.642 111.179 35.3275 111.193 37.4066C111.205 39.405 109.715 41.1707 107.789 41.183C106.807 41.1892 105.9 40.7912 105.317 39.9874L105.298 39.9876L105.304 41.0171L104.072 41.0249ZM109.941 37.4146C109.933 36.0621 108.904 34.8776 107.595 34.8859C106.324 34.894 105.292 36.0714 105.301 37.4238C105.31 38.8368 106.337 39.981 107.647 39.9727C108.879 39.9447 109.95 38.8074 109.941 37.4146Z" />
      <BlackOrGreyPath d="M113.329 43.3482L114.314 40.8186L111.536 33.8314L112.922 33.8226L114.96 39.361L116.985 33.7968L118.352 33.7882L114.658 43.3398L113.329 43.3482Z" />
    </g>
    <g clipPath="url(#clip2)">
      <path
        d="M60.9753 25.0551C59.2193 26.2668 56.7581 26.5595 54.66 26.5728L48.1224 26.6143L47.965 1.80249L53.2558 1.76891C55.7796 1.7529 58.3648 1.82885 60.3528 3.63255C61.6066 4.73286 62.4697 6.57449 62.4802 8.23682C62.4939 10.3917 61.5915 11.9367 59.7735 12.9641C62.6384 13.9926 63.9892 16.0159 64.0087 19.0943C64.0242 21.5262 62.9432 23.688 60.9753 25.0551ZM54.4081 6.04073L52.5228 6.0527L52.5568 11.4091L54.29 11.3981C56.0536 11.3869 57.9662 10.8822 57.9523 8.69655C57.9392 6.63403 56.1717 6.02954 54.4081 6.04073ZM54.9559 15.7038L52.5841 15.7188L52.6258 22.2758L54.9063 22.2613C57.0652 22.2476 59.4637 21.6475 59.4467 18.9693C59.4309 16.4758 57.0844 15.6903 54.9559 15.7038Z"
        fill="#E31B84"
      />
      <path
        d="M75.6143 27.0248C70.2626 27.0587 65.7948 22.6232 65.7604 17.2053C65.7258 11.7565 70.076 7.2343 75.4885 7.19995C80.9314 7.16541 85.2469 11.5711 85.2815 17.0198C85.3172 22.6533 81.1788 26.9895 75.6143 27.0248ZM75.5142 11.2634C72.4127 11.2831 70.1503 14.1605 70.1693 17.1465C70.189 20.2557 72.4257 22.9198 75.5881 22.8997C78.6896 22.88 80.8922 20.157 80.8728 17.1094C80.8845 14.1539 78.6462 11.2435 75.5142 11.2634Z"
        fill="#E31B84"
      />
      <path
        d="M96.8082 26.8903C91.4565 26.9242 86.9887 22.4887 86.9543 17.0708C86.9197 11.622 91.2698 7.09978 96.6823 7.06543C102.125 7.03089 106.441 11.4366 106.475 16.8853C106.511 22.5188 102.373 26.8549 96.8082 26.8903ZM96.7081 11.1289C93.6066 11.1486 91.3442 14.026 91.3632 17.012C91.3829 20.1212 93.6196 22.7853 96.782 22.7652C99.8835 22.7455 102.086 20.0225 102.067 16.9749C102.048 14.0196 99.8097 11.1092 96.7081 11.1289Z"
        fill="#E31B84"
      />
      <path
        d="M120.704 26.1229L114.416 17.4506L114.355 17.451L114.41 26.1628L110.001 26.1908L109.844 1.40979L114.253 1.38181L114.348 16.312L114.408 16.3116L120.221 7.53174L125.299 7.49952L118.729 16.6536L126.269 26.0876L120.704 26.1229Z"
        fill="#E31B84"
      />
      <path
        d="M149.743 25.9386L149.625 7.34514L149.504 7.34592L143.388 25.9789L139.526 26.0035L133.145 7.44973L133.053 7.45031L133.171 26.0438L128.641 26.0725L128.483 1.2915L134.778 1.25156L141.404 19.9884L141.495 19.9879L147.822 1.16878L154.117 1.12883L154.274 25.9099L149.743 25.9386Z"
        fill="#00FFFF"
      />
      <path
        d="M164.743 32.062L160 32.0921L163.324 24.1284L156.497 7.30151L161.515 7.26967L165.787 19.1872L170.12 7.21506L175.137 7.18322L164.743 32.062Z"
        fill="#00FFFF"
      />
      <VioletOrWhitePath d="M198.699 25.6279L198.581 7.03442L198.49 7.035L192.374 25.668L188.513 25.6925L182.1 7.13901L182.039 7.1394L182.157 25.7329L177.627 25.7616L177.469 0.980591L183.764 0.940646L190.39 19.6775L190.481 19.6769L196.808 0.857862L203.103 0.817918L203.26 25.5989L198.699 25.6279Z" />
      <VioletOrWhitePath d="M225.198 18.1637L210.937 18.2542C211.032 18.7461 211.278 19.1756 211.554 19.6048C212.567 21.1376 214.215 22.0815 216.04 22.0699C217.834 22.0586 219.38 21.3099 220.251 19.6728L224.873 19.6434C223.711 23.4374 219.958 26.1395 216.035 26.1644C210.531 26.1993 206.308 21.9162 206.273 16.3751C206.237 10.8032 210.314 6.37507 215.879 6.33976C221.231 6.3058 225.393 10.5585 225.428 15.9765C225.462 16.6535 225.376 17.4237 225.198 18.1637ZM215.965 10.3721C213.29 10.389 211.414 12.0018 210.793 14.6532L220.949 14.5888C220.506 11.9441 218.641 10.3551 215.965 10.3721Z" />
      <VioletOrWhitePath d="M240.205 25.3645L240.147 16.1909C240.13 13.605 239.683 10.2215 236.399 10.2424C235.244 10.2497 234.062 10.9345 233.399 11.893C232.616 13.0678 232.629 15.1919 232.638 16.5464L232.694 25.3814L228.285 25.4093L228.167 6.84666L232.272 6.82061L232.282 8.42137C233.733 6.96526 235.187 6.15562 237.285 6.1423C239.292 6.12957 241.518 7.13135 242.836 8.69303C244.276 10.4386 244.565 12.8381 244.579 15.0237L244.644 25.3363L240.205 25.3645Z" />
      <VioletOrWhitePath d="M253.522 10.6571L253.614 25.2795L249.236 25.3072L249.143 10.6849L246.984 10.6986L246.959 6.72748L249.118 6.71378L249.079 0.526216L253.457 0.498429L253.496 6.68599L256.142 6.6692L256.167 10.6403L253.522 10.6571Z" />
      <VioletOrWhitePath d="M266.937 25.8107C261.585 25.8446 257.117 21.4091 257.083 15.9912C257.048 10.5424 261.398 6.02019 266.811 5.98584C272.254 5.9513 276.569 10.357 276.604 15.8057C276.64 21.4392 272.501 25.7753 266.937 25.8107ZM266.837 10.0493C263.735 10.069 261.473 12.9464 261.492 15.9324C261.512 19.0416 263.748 21.7057 266.911 21.6856C270.012 21.6659 272.215 18.9429 272.195 15.8953C272.177 12.94 269.938 10.0296 266.837 10.0493Z" />
      <VioletOrWhitePath d="M283.895 14.6511L283.961 25.1176L279.552 25.1456L279.434 6.52134L283.478 6.49567L283.488 8.12722L283.549 8.12683C284.754 6.30287 285.663 5.83532 287.822 5.82162L287.85 10.1314C284.992 10.2726 283.877 11.9421 283.895 14.6511Z" />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect
          width="40.9756"
          height="41"
          fill="white"
          transform="translate(0.993866 2.10046) rotate(-0.363603)"
        />
      </clipPath>
      <clipPath id="clip1">
        <rect
          width="94.9435"
          height="13"
          fill="white"
          transform="translate(48.149 30.8019) rotate(-0.363603)"
        />
      </clipPath>
      <clipPath id="clip2">
        <rect
          width="239.857"
          height="31"
          fill="white"
          transform="translate(47.965 1.80249) rotate(-0.363603)"
        />
      </clipPath>
    </defs>
  </svg>
);

const Header: React.FC = () => (
  <Container>
    <Link href="/">
      <LinkLogo>
        <BookMyMentorLogo />
        <Title className="sr-only">Book My Mentor</Title>
      </LinkLogo>
    </Link>
    <NavBar />
  </Container>
);

export default Header;