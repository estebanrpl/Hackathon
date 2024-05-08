import '../../css/layout/_Header.css';

export function Header() {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-brand'>
          <span>MoneyMentor</span>
        </div>
        <div className='navbar-menu'>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/about'>About</a>
            </li>
            <li>
              <a href='/contact'>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
