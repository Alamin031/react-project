import React, { PropsWithChildren } from 'react';
// import { useRouter } from 'next/router';

// import useAuth from '@/hooks/useAuth';

export default function PrivateGuard({ children }: PropsWithChildren) {
  // const router = useRouter();
  // const { user, isAuthStatusKnown } = useAuth();

  // if (!isAuthStatusKnown) return null;

  // if (!user) {
  //   router.replace('/dashboard');
  //   return null;
  // }

  return <div>{children}</div>;
}
