export function Sidebar() {
  return (
    <aside className='sidebar'>
      <ul>
        <li>
          <a href='/dashboard'>Dashboard</a>
        </li>
        <li>
          <a href='/reports'>Reports</a>
        </li>
        <li>
          <a href='/configuration'>Configuration</a>
        </li>
      </ul>
    </aside>
  );
}
