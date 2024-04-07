import Link from 'next/link';


export default function Logout() {
    return(
      <Link href="/api/auth/logout" className='bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-gradient-to-tr hover:from-blue-600 hover:to-orange-600 hover:transition hover:duration-300 hover:ease-in-out'>Logout</Link>
    );
  }