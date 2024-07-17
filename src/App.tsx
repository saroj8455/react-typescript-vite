import { useEffect, useState } from 'react';
import { Button } from './common/Prime';
import { Outlet } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { FloatLabel } from 'primereact/floatlabel';
import { Image } from 'primereact/image';
import Joke from './components/Joke';
import Calc from './common/Calc';
export interface Response {
  total_count: number;
  incomplete_results: boolean;
  items: GithubUser[];
}

export interface GithubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  score: number;
}

function App() {
  const [searchParams, setParams] = useState('jh');
  const [users, setUsers] = useState<GithubUser[]>([]);
  const controller = new AbortController();

  useEffect(() => {
    const fetchInfo = async () => {
      const response = await fetch(
        `https://api.github.com/search/users?q=${searchParams}`,
        { signal: controller.signal }
      );
      const githubResponse = (await response.json()) as Response;
      setUsers([...githubResponse.items]);
    };

    fetchInfo();

    return () => {
      // Cancel the request on unmount
      controller.abort();
    };
  }, [searchParams]);

  return (
    <>
      <div className='flex min-h-screen'>
        <aside className=' w-35rem'>
          <div className='card  mt-5 px-1 '>
            <FloatLabel>
              <InputText
                id='product'
                className='w-full'
                value={searchParams}
                onChange={(e) => setParams(e.target.value)}
              />
              <label htmlFor='product'>Search in amazon...</label>
            </FloatLabel>
          </div>
          <nav className='px-4'>
            <ul className='flex p-5 flex-column justify-content-start gap-2'>
              {users.map((u) => {
                return (
                  <li key={u.id}>
                    <div className='border-circle'>
                      {/* <Image
                        src={u.avatar_url}
                        alt='Image'
                        width='50'
                        height='50'
                        preview
                      /> */}
                      <img
                        className='border-circle'
                        src={u.avatar_url}
                        alt={u.html_url}
                        width='50'
                        height='50'
                      />
                    </div>
                  </li>
                );
              })}

              {/* <li>Products</li>
              <li>Cart</li> */}
            </ul>
          </nav>
        </aside>
        <main className=' flex-1'>
          <Joke />
          <Calc />
          {/* render all children route */}
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
