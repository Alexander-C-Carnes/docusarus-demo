import React, {useState} from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Default implementation, that you can customize
export default function Root({children}) {
  console.log(children);
  return <>{children}</>
}
