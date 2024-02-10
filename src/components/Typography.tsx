import React from 'react';

export function H1({ children }: { children: React.ReactNode }) {
  return <h1 className="text-4xl font-bold">{children}</h1>;
}

export function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-3xl font-bold">{children}</h2>;
}

export function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-2xl font-bold">{children}</h3>;
}

export function H4({ children }: { children: React.ReactNode }) {
  return <h4 className="text-xl font-bold">{children}</h4>;
}

export function H5({ children }: { children: React.ReactNode }) {
  return <h5 className="text-lg font-bold">{children}</h5>;
}

export function H6({ children }: { children: React.ReactNode }) {
  return <h6 className="text-base font-bold text-gray-600">{children}</h6>;
}

function Text({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={`text-base text-gray-600 ${className}`}>{children}</p>;
}
Text.defaultProps = {
  className: '',
};

export { Text };

export function Caption({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-gray-400">{children}</p>;
}
