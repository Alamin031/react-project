import React from 'react';

import DashboardNav from '@/components/DashboardNav';
import DashboardWrapper from '@/components/Wrappers/DashboardWrapper';

function Message() {
  return (
    <DashboardWrapper>
      <DashboardNav backButtonText="DASHBOARD" backHref="/" />
      <DashboardWrapper.MainContent>queries</DashboardWrapper.MainContent>
    </DashboardWrapper>
  );
}

Message.layout = 'none';
export default Message;
