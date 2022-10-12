import "bootstrap/dist/css/bootstrap.css";

const Header = (props) => {
    return (<header className="text-center">
        <h1 className="display-1">{props.title}</h1>
    </header>);
}

export default Header;