import Link from 'next/link';
import styles from './NavMenu.module.css';
import Image from 'next/image';
import { SignInButton, SignOutButton } from './Buttons';
import { getServerSession } from 'next-auth';

export default async function NavMenu() {
  const session = await getServerSession();

  return (
    <nav className={styles.nav}>
      <Link href={'/'}>
        <Image
          src="/next.svg" // Route of the image file
          width={216}
          height={30}
          alt="NextSpace Logo"
        />
      </Link>
      <ul className={styles.links}>
        <li>
          <Link href={'/about'}>About</Link>
        </li>
        <li>
          <Link href={'/blog'}>Blog</Link>
        </li>
        <li>
          <Link href={'/users'}>Users</Link>
        </li>
        <li>
          <SignInButton />
        </li>
        <li>
          {session ? <SignOutButton /> : null}
        </li>
      </ul>
    </nav>
  );
}