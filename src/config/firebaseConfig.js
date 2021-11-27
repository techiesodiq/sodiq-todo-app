/** @format */

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
	apiKey: "AIzaSyD8H_qEnithSjvsioQcCHGuAQ0eoA0Sy3c",
	authDomain: "todo-df937.firebaseapp.com",
	projectId: "todo-df937",
	storageBucket: "todo-df937.appspot.com",
	messagingSenderId: "123065355064",
	appId: "1:123065355064:web:eac6974c2ee7f34e08cfcd",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
