import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { auth } from "./init";
import { useEffect, useState } from "react";

const googleProvider = new GoogleAuthProvider();

export const registerEmail = async (email, password) => {
    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        return userCredentials;
    } catch (error) {
        throw error;
    }
};

export const loginGoogle = async () => {
    try {
        const userCredentials = await signInWithPopup(auth, googleProvider);
        return userCredentials;
    } catch (error) {
        throw error;
    }
};

export const loginEmail = async (email, password) => {
    try {
        const userCredentials = await signInWithEmailAndPassword(auth, email, password);
        return userCredentials;
    } catch (error) {
        throw error;
    }
};

export const logout = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        throw error;
    }
};

export const useUser = () => {
    const [user, setUser] = useState(auth?.currentUser);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((u) => setUser(u));
        return () => unsubscribe();
    }, []);

    return user;
};
