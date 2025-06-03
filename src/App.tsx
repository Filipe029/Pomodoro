import { Heading } from './components/Heading';
import './styles/theme.css';
import './styles/global.css';

export function App() {
  console.log('oi');

  return (
    <>
      <Heading attr={123} attr2='STRING'>
        Ola!!!!!!!!
      </Heading>
      <p>oioioioioioiiooi</p>
    </>
  );
}
