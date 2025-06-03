// src/context/UtmContext.tsx
import { createContext, useContext, useState, ReactNode, useEffect, Dispatch } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

export interface UtmData {
  course_name: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_content: string | null;
  utm_campaign: string | null;
  utm_term: string | null;
  full_url: string | null;
}

const UtmContext = createContext<{
  utmData: UtmData;
  setUtmData: Dispatch<React.SetStateAction<UtmData>>;
} | undefined>(undefined);

export function UtmProvider({ children }: { children: ReactNode }) {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const [utmData, setUtmData] = useState<UtmData>({
    course_name: null,
    utm_source: null,
    utm_medium: null,
    utm_content: null,
    utm_campaign: null,
    utm_term: null,
    full_url: null
  });

  useEffect(() => {
    const currentFullUrl = window.location.origin + location.pathname + location.search;
    setUtmData({
      course_name: searchParams.get('course_name'),
      utm_source: searchParams.get('utm_source'),
      utm_medium: searchParams.get('utm_medium'),
      utm_content: searchParams.get('utm_content'),
      utm_campaign: searchParams.get('utm_campaign'),
      utm_term: searchParams.get('utm_term'),
      full_url: currentFullUrl,
    });
  }, [searchParams]);

  return (
    <UtmContext.Provider value={{ utmData, setUtmData }}>
      {children}
    </UtmContext.Provider>
  );
}

export function useUtm() {
  const context = useContext(UtmContext);
  return context;
}