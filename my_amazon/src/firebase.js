import firebase from 'firebase'

const firebaseApp  = firebase.initializeApp({
	apiKey: "AIzaSyAagrwyvpES3HVmQPvchFGR2AYAP2w4ZhI",
	authDomain: "my-e3e33.firebaseapp.com",
	databaseURL: "https://my-e3e33.firebaseio.com",
	projectId: "my-e3e33",
	storageBucket: "my-e3e33.appspot.com",
	messagingSenderId: "949617778958",
	appId: "1:949617778958:web:073cc653de94589380b75f"
})

const auth = firebase.auth();

export { auth };
