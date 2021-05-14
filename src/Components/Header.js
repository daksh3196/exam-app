const title = 'Mocked Up!'

const Header = () => {
    return(
        <div className = "header">
            <h1> {title} </h1>
            
            <ul className="navbar-list">
                <li><a href ="www.google.com">Restart Test</a></li>
                <li><a href ="www.google.com">End Test</a></li>
            </ul>
        </div>
    );
}

export default Header;