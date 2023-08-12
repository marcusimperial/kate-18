"use client";

import { initializeApp } from 'firebase/app';
import { getFirestore, doc, updateDoc, getDoc } from 'firebase/firestore';

initializeApp({ 
    apiKey: process.env.NEXT_PUBLIC_API_KEY, 
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN, 
    projectId: process.env.NEXT_PUBLIC_PROJECT_iD 
});

const db = getFirestore();

export const getData = async (key, value) => {
    try {
        // get doc based on key 
        const docRef = (await getDoc(doc(db, `${key}/${value}`))).data();
        if (!docRef) return false;
        return docRef?.ref;
    } catch (e) {
        console.error(e);
        return false;
    }
};

export const updateData = async (docId) => {
    try {
        // update doc based on ref 
        await updateDoc(doc(db, `guests/${docId}`), { confirm: true });
        return true;
    } catch (e) {
        console.error(e);
        return false;
    }
};