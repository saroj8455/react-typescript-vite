import { useState } from 'react';
import { Button } from './common/Prime';
function App() {
  return (
    <>
      <div className='text-center text-orange-400'>
        Vite + React + Typescript
      </div>
      <div className='card flex flex-wrap justify-content-center gap-3'>
        <Button icon='pi pi-check' />
        <Button label='Submit' icon='pi pi-check' />
        <Button label='Submit' icon='pi pi-check' iconPos='right' />
      </div>
    </>
  );
}

export default App;
