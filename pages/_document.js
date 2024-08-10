import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
	return (
		<Html>
			<Head />
			<body>
				<Main />
				<NextScript />
				<Script
					src="//dapi.kakao.com/v2/maps/sdk.js?appkey=af3baec1e41a89a148ac199d93d21e37&libraries=services,clusterer&autoload=false"
					strategy="beforeInteractive"
				/>
			</body>
		</Html>
	);
}

// 개발용
// 376c6dbd40a9160d6cb060f21074e427
// src="//dapi.kakao.com/v2/maps/sdk.js?appkey=376c6dbd40a9160d6cb060f21074e427&libraries=services,clusterer&autoload=false"

// 배포용
// af3baec1e41a89a148ac199d93d21e37
// src="//dapi.kakao.com/v2/maps/sdk.js?appkey=af3baec1e41a89a148ac199d93d21e37&libraries=services,clusterer&autoload=false"
