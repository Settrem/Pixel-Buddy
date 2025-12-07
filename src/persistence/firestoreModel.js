import {getFirestore, doc, setDoc, getDoc} from "firebase/firestore";
import { firebaseConfig } from "./firebaseConfig";
import { getAuth } from "firebase/auth";

const app= initializeApp(firebaseConfig);
const db= getFirestore(app);
const auth = getAuth(app);

//auth.currentUser   The current user when logged in
async function signUp(email, password, buddyName) {
    try {
        // 1. Create the Firebase Auth user
        const userCredential = await createUserWithEmailAndPassword( auth, email, password );
        const user = userCredential.user;
        const userDocument = doc(db, "users", user.uid);

        //set buddyname 
        await setDoc(userDocument, {
                user: { uid: user.uid, email: email },
                buddyModel: {
                    name: buddyName,
                    buddyType: null,
                    clothesHat: null,
                    clothesTop: null,
                    clothesBottom: null,
                    stats: { hunger: 100, happiness: 100, energy: 100 },
                    lastTimeInteracted: new Date(),
                },
                uiTheme: [84,92,158],
        });
        console.log("User created, saved, and logged in!");

    } catch (error) {
        console.error("Sign up failed:", error);
    }
}

async function logIn(email, password) {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("Logged in successfully!");
    } catch (error) {
        console.error("Login error:", error);
    }
}

export { signUp, logIn };
