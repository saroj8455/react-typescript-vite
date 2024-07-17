import React, { useEffect, useState } from 'react';
import { Card } from 'primereact/card';

import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';

import { ProgressBar } from 'primereact/progressbar';

export interface Joke {
  type: string;
  setup: string;
  punchline: string;
  id: number;
}

export interface ChokJoke {
  icon_url: string;
  id: string;
  url: string;
  value: string;
}

export default function Joke() {
  // const [joke, setJoke] = useState<Joke | null>(null);
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // create signal
  const controller = new AbortController();
  const signal = controller.signal;

  async function fetchJoke() {
    setJoke('');
    setLoading(true);
    setError(false);

    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random', {
        signal: AbortSignal.timeout(1000),
      });
      const data = (await response.json()) as ChokJoke;
      setJoke(data.value);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const getJoke = async () => {
      // const response = await fetch(
      //   'https://official-joke-api.appspot.com/random_joke'
      // );
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const data = (await response.json()) as ChokJoke;
      setJoke(data.value);
    };

    getJoke();
  }, []);

  return (
    <>
      <div className='card p-4 flex  flex-column gap-2'>
        <div className='btn'>
          <Button
            label='Get a random joke'
            severity='secondary'
            icon='pi pi-check'
            onClick={fetchJoke}
          />
        </div>
        <Card title='chucknorris.io'>
          {/* <p className='m-0'>{joke?.setup}</p> */}
          <p className='m-0'>{joke}</p>
        </Card>
        <Divider />
        {loading && (
          <ProgressBar
            mode='indeterminate'
            style={{ height: '6px' }}
          ></ProgressBar>
        )}
        {error && <p className='text-center'>Failed to load the joke.</p>}
        <div className='btn'>
          <Button
            label='generate joke'
            icon='pi pi-spin pi-cog'
            onClick={fetchJoke}
          />
        </div>
        <Card title='chucknorris.io'>
          {/* <p className='m-0'>{joke?.setup}</p> */}
          <p className='m-0'>{joke}</p>
        </Card>
      </div>
    </>
  );
}
