import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyAAm4xxPiBQs5P1tiFbZpgnNzLip7-3D6E',
	authDomain: 'todos-app-19b22.firebaseapp.com',
	projectId: 'todos-app-19b22',
	storageBucket: 'todos-app-19b22.appspot.com',
	messagingSenderId: '579489048576',
	appId: '1:579489048576:web:abfe97212d4162c62e90e5',
	databaseURL:
		'https://todos-app-19b22-default-rtdb.europe-west1.firebasedatabase.app/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
