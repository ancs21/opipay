import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import camvas from './camvas'
import pico from './pico'
import Header from './Components/Header';

class App extends Component {
	
	// componentDidMount() {
	// 	var update_memory = pico.instantiate_detection_memory(5); // we will use the detecions of the last 5 frames
	// 	var facefinder_classify_region = function (r, c, s, pixels, ldim) { return -1.0; };
	// 	var cascadeurl = 'https://raw.githubusercontent.com/nenadmarkus/pico/c2e81f9d23cc11d1a612fd21e4f9de0921a5d0d9/rnt/cascades/facefinder';
	// 	fetch(cascadeurl).then(function (response) {
	// 		response.arrayBuffer().then(function (buffer) {
	// 			var bytes = new Int8Array(buffer);
	// 			facefinder_classify_region = pico.unpack_cascade(bytes);
	// 			console.log('* cascade loaded');
	// 		})
	// 	})
	// 	/*
	// 		(2) get the drawing context on the canvas and define a function to transform an RGBA image to grayscale
	// 	*/
	// 	var canvas = document.getElementsByTagName('canvas')[0];
	// 	var ctx = canvas.getContext('2d');
	// 	function rgba_to_grayscale(rgba, nrows, ncols) {
	// 		var gray = new Uint8Array(nrows * ncols);
	// 		for (var r = 0; r < nrows; ++r)
	// 			for (var c = 0; c < ncols; ++c)
	// 				// gray = 0.2*red + 0.7*green + 0.1*blue
	// 				gray[r * ncols + c] = (2 * rgba[r * 4 * ncols + 4 * c + 0] + 7 * rgba[r * 4 * ncols + 4 * c + 1] + 1 * rgba[r * 4 * ncols + 4 * c + 2]) / 10;
	// 		return gray;
	// 	}
	// 	/*
	// 		(3) this function is called each time a video frame becomes available
	// 	*/
	// 	var processfn = function (video, dt) {
	// 		// render the video frame to the canvas element and extract RGBA pixel data
	// 		ctx.drawImage(video, 0, 0);
	// 		var rgba = ctx.getImageData(0, 0, 640, 480).data;
	// 		// prepare input to `run_cascade`
	// 		const image = {
	// 			"pixels": rgba_to_grayscale(rgba, 480, 640),
	// 			"nrows": 480,
	// 			"ncols": 640,
	// 			"ldim": 640
	// 		}
	// 		const params = {
	// 			"shiftfactor": 0.1, // move the detection window by 10% of its size
	// 			"minsize": 100,     // minimum size of a face
	// 			"maxsize": 1000,    // maximum size of a face
	// 			"scalefactor": 1.1  // for multiscale processing: resize the detection window by 10% when moving to the higher scale
	// 		}
	// 		// run the cascade over the frame and cluster the obtained detections
	// 		// dets is an array that contains (r, c, s, q) quadruplets
	// 		// (representing row, column, scale and detection score)
	// 		let dets = pico.run_cascade(image, facefinder_classify_region, params);
	// 		dets = update_memory(dets);
	// 		dets = pico.cluster_detections(dets, 0.2); // set IoU threshold to 0.2
	// 		// draw detections
	// 		for (var i = 0; i < dets.length; ++i)
	// 			// check the detection score
	// 			// if it's above the threshold, draw it
	// 			// (the constant 50.0 is empirical: other cascades might require a different one)
	// 			if (dets[i][3] > 50.0) {
	// 				// let img = canvas.toDataURL()
	// 				var dataURL = canvas.toDataURL('image/jpeg', 1);
	// 				// var blob = dataURItoBlob(dataURL);
	// 				// var fd = new FormData(document.forms[0]);
	// 				// fd.append("image", blob);
	// 				// fetch('http://localhost:4000/upload', {
	// 				// 	method: 'post',
	// 				// 	body: fd, // post body					  
	// 				// 	headers: {
	// 				// 	  'Accept': 'application/json'
	// 				// 	},
	// 				//   })
	// 				//   .then(res=> res.json())
	// 				//   .then(data => console.log(data))
	// 				//   .catch(err => console.log(err))

	// 				// console.log(img)
	// 				ctx.beginPath();
	// 				ctx.arc(dets[i][1], dets[i][0], dets[i][2] / 2, 0, 2 * Math.PI, false);
	// 				ctx.lineWidth = 3;
	// 				ctx.strokeStyle = 'red';
	// 				ctx.stroke();
	// 			}
	// 	}
	// 	function dataURItoBlob(dataURI) {
	// 		// convert base64/URLEncoded data component to raw binary data held in a string
	// 		var byteString;
	// 		if (dataURI.split(',')[0].indexOf('base64') >= 0)
	// 			byteString = atob(dataURI.split(',')[1]);
	// 		else
	// 			byteString = unescape(dataURI.split(',')[1]);

	// 		// separate out the mime component
	// 		var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

	// 		// write the bytes of the string to a typed array
	// 		var ia = new Uint8Array(byteString.length);
	// 		for (var i = 0; i < byteString.length; i++) {
	// 			ia[i] = byteString.charCodeAt(i);
	// 		}

	// 		return new Blob([ia], { type: mimeString });
	// 	}
	// 	/*
	// 		(4) instantiate camera handling (see https://github.com/cbrandolino/camvas)
	// 	*/
	// 	var mycamvas = new camvas(ctx, processfn);
	// }
	
	render() {
		return (
			<div>
			<Header />
				<p className="App-intro">
					{/* <canvas width='640' height='480'></canvas> */}
				</p>
			</div>
		);
	}
}

export default App;
