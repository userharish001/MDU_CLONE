"use client"; // Required for interactivity

import * as React from "react";
import { createPortal } from "react-dom";

const SheetContext = React.createContext();

const Sheet = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <SheetContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SheetContext.Provider>
  );
};

const SheetTrigger = ({ children }) => {
  const { setIsOpen } = React.useContext(SheetContext);

  return React.cloneElement(children, {
    onClick: () => setIsOpen(true),
  });
};

const SheetContent = ({ side = "right", children, className = "" }) => {
  const { isOpen, setIsOpen } = React.useContext(SheetContext);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const sideClasses = {
    right: "inset-y-0 right-0",
    left: "inset-y-0 left-0",
    top: "inset-x-0 top-0",
    bottom: "inset-x-0 bottom-0",
  };

  if (!mounted) return null;

  return createPortal(
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />
          {/* Content */}
          <div
            className={`fixed ${sideClasses[side]} bg-background shadow-lg ${className}`}
          >
            {children}
          </div>
        </div>
      )}
    </>,
    document.body
  );
};

export { Sheet, SheetTrigger, SheetContent };