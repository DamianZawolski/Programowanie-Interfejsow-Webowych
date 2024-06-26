import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    query,
    serverTimestamp,
    updateDoc,
    where,
} from "firebase/firestore";
import { auth, firestore } from "./init";

export const addOffer = async (offer) => {
    console.log(offer);

    const tempOffer = {
        name: offer.name || "NOT_PROVIDED",
        location: offer.location || "NOT_PROVIDED",
        description: offer.description || "NOT_PROVIDED",
        stars: offer.stars || 0,
        price: offer.price || 0,
        userId: auth?.currentUser.uid,
        created: serverTimestamp(),
    };

    const offerCollection = collection(firestore, "hotels");
    const docRef = await addDoc(offerCollection, tempOffer);
    console.log(docRef.id);
    return docRef.id;
};

export const readMyOffers = async () => {
    const offers = [];

    const offerCollection = collection(firestore, "hotels");
    const user = auth?.currentUser;

    if (!user) {
        console.error("No user logged in");
        return offers;
    }

    const q = query(offerCollection, where("userId", "==", user.uid));
    const results = await getDocs(q);

    results.forEach((doc) => {
        offers.push({ id: doc.id, ...doc.data() });
    });

    return offers;
};

// read a single document specified by id
export const readOfferById = async (id) => {
    const docRef = doc(firestore, "hotels", id);
    const docSnap = await getDoc(docRef);

    return docSnap.data();
};

export const readOffers = async () => {
    const offers = [];

    const offerCollection = collection(firestore, "hotels");

    const q = query(offerCollection);
    const results = await getDocs(q);


    results.forEach((doc) => {
        offers.push({ id: doc.id, ...doc.data() });
    });
    return offers;
};

// TODO - add offer owner check
export const updateOffer = async (offerId, updatedOffer) => {
    const offerDocRef = doc(firestore, "hotels", offerId);
    try {
        await updateDoc(offerDocRef, updatedOffer);
        console.log("Offer updated:", offerId);
    } catch (error) {
        console.error("Error updating offer:", error);
    }
};

export const deleteOffer = async (offerId) => {
    const offerDocRef = doc(firestore, "hotels", offerId);
    try {
        await deleteDoc(offerDocRef);
        console.log("Offer deleted:", offerId);
    } catch (error) {
        console.error("Error updating offer:", error);
    }
};
