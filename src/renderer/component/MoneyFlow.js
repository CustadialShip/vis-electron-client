import React from 'react';
import MoneyFlowList from './MoneyFlowList';

const MoneyFlow = () => {
  return (
    <div className='moneyFlows'>
      <div className='moneyUpFlows'>
        <MoneyFlowList />
      </div>
      <div className='moneyDownFlows'>
        <MoneyFlowList />
      </div>
    </div>
  );
};

export default MoneyFlow;
