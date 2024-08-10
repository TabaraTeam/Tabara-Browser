import { useEffect, useMemo, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { debounce } from 'lodash';

export default function Home() {
	const [center, setCenter] = useState({
		lat: 33.450701,
		lng: 126.570667,
	});

	const [position, setPosition] = useState({
		lat: 33.450701,
		lng: 126.570667,
	});

	const setCenterToMyPosition = () => {
		setCenter(position);
	};

	const updateCenterWhenMapMoved = useMemo(
		() =>
			debounce(map => {
				console.log(map.getCenter());
				setCenter({
					lat: map.getCenter().getLat(),
					lng: map.getCenter().getLng(),
				});
			}, 500),
		[],
	);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(pos => {
			setCenter({ lat: pos.coords.latitude, lng: pos.coords.longitude });
		});

		navigator.geolocation.watchPosition(pos => {
			setPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude });
		});
	}, []);

	return (
		<>
			<Map
				id="map"
				center={center}
				style={{
					width: '100%',
					height: '450px',
				}}
				level={3}
				onCenterChanged={updateCenterWhenMapMoved}
			>
				<MapMarker position={position} />
			</Map>
			<div>
				<button>Refresh</button>
				<button onClick={setCenterToMyPosition}>My Location</button>
			</div>
		</>
	);
}
