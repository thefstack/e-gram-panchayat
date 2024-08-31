import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import {auth,db} from './firebase'; // Firebase configuration


function useAuth() {
    const [user, setUser] = useState(null);
    const [role, setRole] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const userDoc = await getDoc(doc(db, 'users', user.email));
                await setUser(user);
                await setRole(userDoc.data()?.role || 'user');
            } else {
                setUser(null);
                setRole(null);
            }
            setLoading(false);
        });
    }, []);

    return { user, role, loading };
}

export default useAuth;
