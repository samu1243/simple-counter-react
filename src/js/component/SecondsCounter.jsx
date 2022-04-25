import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export function SecondsCounter() {
	const [time, setTime] = useState(0);
	const [timerOn, setTimerOn] = useState(false);

	useEffect(() => {
		let interval = null;
		if (timerOn) {
			interval = setInterval(() => {
				setTime((prevTime) => prevTime + 1);
			}, 10);
		} else {
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [timerOn]);

	return (
		<div className="everything">
			<div className="timers">
				<div id="logo">
					<h1>
						<strong>
							<i className="fa-regular fa-clock"></i>
						</strong>
					</h1>
				</div>
				<div id="time1">
					<h1>
						<strong>{~~((time / 100000) % 10)}</strong>
					</h1>
				</div>
				<div id="time2">
					<h1>
						<strong>{~~((time / 10000) % 10)}</strong>
					</h1>
				</div>
				<div id="time3">
					<h1>
						<strong>{~~((time / 1000) % 10)}</strong>
					</h1>
				</div>
				<div id="time4">
					<h1>
						<strong>{~~((time / 100) % 10)}</strong>
					</h1>
				</div>
				<div id="time5">
					<h1>
						<strong>{~~((time / 10) % 10)}</strong>
					</h1>
				</div>
				<div id="time6">
					<h1>
						<strong>{~~(time % 10)}</strong>
					</h1>
				</div>
			</div>

			<div>
				<button onClick={() => setTimerOn(true)}>Start</button>
				<button onClick={() => setTimerOn(false)}>Stop</button>
				<button onClick={() => setTimerOn(true)}>Resume</button>
				<button onClick={() => setTime(0)}>Reset</button>
			</div>
		</div>
	);
}
