import {ColorSchemeToggle} from '~/frontend/components/ColorSchemeToggle';
import {UserApiTest} from '~/frontend/components/UserApiTest';
import {Welcome} from '~/frontend/components/Welcome';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <UserApiTest />
    </>
  );
}
