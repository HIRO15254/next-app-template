'use client';

import { clientComponentSupabase } from "@/lib/supabase";
import { User } from "@supabase/supabase-js";
import { createContext, useContext, useEffect, useState } from "react";

const authContext = createContext<User | null | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(authContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null | undefined>(undefined);

  useEffect(() => {
    const { data: authListener } = clientComponentSupabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });
    return () => {
      authListener?.subscription.unsubscribe();
    }
  }, []);

  return (
    <authContext.Provider value={user}>
      {(user != undefined) && children}
    </authContext.Provider>
  );
}