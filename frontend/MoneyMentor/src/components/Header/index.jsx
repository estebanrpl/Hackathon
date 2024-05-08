import "../../css/layout/_Header.css"

export function Header() {

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <span>Logo</span>
            </div>
            <div className="navbar-menu">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/sobre">Sobre</a></li>
                    <li><a href="/contato">Contato</a></li>
                </ul>
            </div>
        </nav>
    )
}