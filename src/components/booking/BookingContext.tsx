import { createContext, useCallback, useMemo, useState, type ReactNode } from 'react';

export type BookingCtx = {

  open: boolean;

  openBooking: () => void;

  closeBooking: () => void;

};

export const BookingContext = createContext<BookingCtx>({

  open: false,

  openBooking: () => {},

  closeBooking: () => {},

});

export function BookingProvider({ children }: { children: ReactNode }) {

  const [open, setOpen] = useState(false);

  const openBooking = useCallback(() => setOpen(true), []);

  const closeBooking = useCallback(() => setOpen(false), []);

  const value = useMemo(() => ({ open, openBooking, closeBooking }), [open, openBooking, closeBooking]);

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;

}
