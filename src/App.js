import React, { useState } from 'react';
import { BpkCode } from '@skyscanner/backpack-web/bpk-component-code';
import BpkButton from '@skyscanner/backpack-web/bpk-component-button';
import BpkText from '@skyscanner/backpack-web/bpk-component-text';
import { cssModules } from '@skyscanner/backpack-web/bpk-react-utils';

import STYLES from './App.scss';

const getClassName = cssModules(STYLES);

const App = () => {
  const [selectedDate, setSelectedDate] = useState('');
  
  return (
    <div className={getClassName('App')}>
      <header className={getClassName('App__header')}>
        <div className={getClassName('App__header-inner')}>
          <BpkText 
            tagName="h1" 
            textStyle="xxl" 
            className={getClassName('App__heading')}
          >
            Flight Schedule
          </BpkText>
        </div>
      </header>
      <main className={getClassName('App__main')}>
        <div className={getClassName('App__date-container')}>
          <label htmlFor="flight-date">Select travel date:</label>
          <input
            type="date"
            id="flight-date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className={getClassName('App__date-input')}
          />
        </div>
        
        <BpkText tagName="p" className={getClassName('App__text')}>
          Selected date: <BpkCode>{selectedDate || 'None'}</BpkCode>
        </BpkText>
        
        <BpkButton 
          onClick={() => {
            if (selectedDate) {
              alert(`Flight booked for ${selectedDate}`);
            } else {
              alert('Please select a date first');
            }
          }}
          className={getClassName('App__continue-button')}
        >
          Continue
        </BpkButton>
      </main>
    </div>
  );
};

export default App;