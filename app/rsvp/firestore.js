"use client";

import { initializeApp } from 'firebase/app';
import { getFirestore, doc, updateDoc, getDoc, query, collection, where, getDocs } from 'firebase/firestore';

initializeApp({
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID
});

const db = getFirestore();

export const getData = async (key, value) => {
    try {
        // get doc based on key 
        const docRef = doc(db, `${key}/${value}`);
        const actualDoc = await getDoc(docRef);
        if (!actualDoc) return false;
        const data = actualDoc.data();
        if (!data) return false;
        return { ...data, id: actualDoc.id };
    } catch (e) {
        console.error(e);
        return false;
    }
};

export const updateData = async (docId, confirm) => {
    try {
        // update doc based on ref 
        console.log('setting confirm', confirm)
        await updateDoc(doc(db, `guests/${docId}`), { confirm });
        return true;
    } catch (e) {
        console.error(e);
        return false;
    }
};

export const getGroupMembers = async (groupName) => {
    try {
        let arr = [];
        const ref = query(collection(db, "groups"), where("value", "==", groupName));
        const snap = await getDocs(ref);
        snap.forEach(doc => {
            console.log(doc.id, doc.data());
            arr.push({ ...doc.data(), id: doc.id });
        });
        return arr;
    } catch (e) {
        console.error(e);
        return false;
    }
};