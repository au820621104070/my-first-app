import { initializeApp } from "firebase/app"

import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD2OM2sI1hENmsU871RgVGUrRjZMKBeNF0",

  authDomain:
    "shopeasy-369a7.firebaseapp.com",

  projectId: "shopeasy-369a7",

  storageBucket:
    "shopeasy-369a7.firebasestorage.app",

  messagingSenderId:
    "288679378184",

  appId:
    "1:288679378184:web:7fd760a07966b15b6280bd"
}

const app =
  initializeApp(firebaseConfig)

export const auth = getAuth(app)