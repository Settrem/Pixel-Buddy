import {getFirestore, doc, setDoc, getDoc} from "firebase/firestore";
import { firebaseConfig } from "./firebaseConfig";
import { signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const app= initializeApp(firebaseConfig);
const db= getFirestore(app);
const auth = getAuth(app);

//auth.currentUser   The current user when logged in
/*
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
                    buddyType: 0,
                    clothesHat: 0,
                    clothesTop: 0,
                    clothesBottom: 0,
                    clothesShoes: 0,
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
*/

/*
async function logIn(email, password) {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("Logged in successfully!");
    } catch (error) {
        console.error("Login error:", error);
    }
}
*/

async function signUp(email, password, buddyName) {
    // 1. Create the Firebase Auth user
    const userCredential = await createUserWithEmailAndPassword( auth, email, password );
    const user = userCredential.user;
    const userDocument = doc(db, "users", user.uid);

    //set buddyname 
    await setDoc(userDocument, {
            user: { uid: user.uid, email: email },
            buddyModel: {
                name: buddyName,
                buddyType: 0,
                clothesHat: 0,
                clothesTop: 0,
                clothesBottom: 0,
                clothesShoes: 0,
                stats: { hunger: 100, happiness: 100, energy: 100 },
                lastTimeInteracted: new Date(),
            },
            uiTheme: [84,92,158],
    });
    console.log("User created, saved, and logged in!");
}


function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

async function logOut() {
    try {
        await signOut(auth);
        console.log("Logged out successfully!");
    } catch (error) {
        console.error("Logout failed:", error);
    }
}

function connectToPersistence(model, watchFunction){
    model.ready = false;

    // Safety check: user must be logged in
    if (!auth.currentUser) {
        console.log("No logged-in user. Cannot connect to persistence.");
        return;
    }

    const ref = doc(db, "users", auth.currentUser.uid);

    async function loadModelFromFirestore() {
        try {
            const snapshot = await getDoc(ref);

            if (!snapshot.exists()) {
                console.warn("User document does not exist yet.");
                model.ready = true;
                return;
            }

            const data = snapshot.data();
            console.log("Loaded Firestore model:", data);

            model.user = data.user || null;
            model.buddyModel = { 
                ...model.buddyModel,
                ...data.buddyModel,
                stats: {
                    ...model.buddyModel.stats,
                    ...data.buddyModel?.stats
                },
                lastTimeInteracted: 
                data.buddyModel?.lastTimeInteracted instanceof Date
                ? data.buddyModel.lastTimeInteracted
                : data.buddyModel?.lastTimeInteracted?.toDate() ?? new Date(),
            };
            model.uiTheme = data.uiTheme || [84, 92, 158];

            
            model.ready = true;
            model.buddyModel.statChangeOverTime();

            } catch (error) {
            console.error("Error loading Firestore model:", error);
        }
    }

    loadModelFromFirestore();

    function modelPropertyChangeACB() {
        return [
            model.buddyModel.name,
            model.buddyModel.stats.hunger,
            model.buddyModel.stats.happiness,
            model.buddyModel.stats.energy,
            model.buddyModel.buddyType,
            model.buddyModel.clothesHat,
            model.buddyModel.clothesTop,
            model.buddyModel.clothesBottom,
            model.buddyModel.clothesShoes,
            model.uiTheme,
            model.buddyModel.lastTimeInteracted,
        ];
    }

    async function updateModelInDatabaseACB(){
        if(!model.ready) return;

        const { name, buddyType, clothesHat, clothesTop, clothesBottom, clothesShoes, stats, lastTimeInteracted } = model.buddyModel;

        const dataToSave = {
            user: model.user,
            buddyModel: { name, buddyType, clothesHat, clothesTop, clothesBottom, clothesShoes, stats, lastTimeInteracted },
            uiTheme: model.uiTheme,
        };

        try {
            await setDoc(ref, dataToSave, {merge : true });
        } catch (error) {
            console.error("Firestore update error:", error);
        }
    }

    watchFunction(modelPropertyChangeACB, updateModelInDatabaseACB);
}


export { auth, signUp, logIn, connectToPersistence, logOut };
