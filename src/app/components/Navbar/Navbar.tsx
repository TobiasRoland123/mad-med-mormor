import { Logo } from '../Logo';

interface NavbarProps {
  navItems: Array<{ name: string; link: string }>;
}

export const Navbar = ({ navItems }: NavbarProps) => {
  return (
    <>
      <nav className=' bg-primaryCol'>
        <div className='max-w-screen-xl flex'>
          <a href='/'>
            <Logo />
          </a>

          {navItems && (
            <ul className='flex gap-6'>
              {navItems.map((item, index) => {
                return (
                  <li
                    key={index}
                    className=''
                  >
                    <a href={item.link}>{item.name}</a>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};
