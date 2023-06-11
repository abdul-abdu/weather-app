import React, { useState } from 'react';
import { CurrentCityContext, CurrentDay } from './contexts';
import { useScrollToTop } from './hooks';
import Pages from './pages';
import { ICurrentWeather } from './types';

const App = (): JSX.Element => {
  const [currentDayInfo, setCurrentDayInfo] = useState<ICurrentWeather>();
  const [currentCityInfo, setCurrentCityInfo] = useState<any>();
  useScrollToTop();

  return (
    <div className="App">
      <CurrentDay.Provider value={{ currentDayInfo, setCurrentDayInfo }}>
        <CurrentCityContext.Provider value={{ currentCityInfo, setCurrentCityInfo }}>
          <Pages />
        </CurrentCityContext.Provider>
      </CurrentDay.Provider>
    </div>
  );
};

export default App
