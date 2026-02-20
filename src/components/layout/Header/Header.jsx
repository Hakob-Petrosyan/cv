import './Header.css';

export default function Header() {
    return(
        <header>
            <div className="header-content container u-flex u-justify-between u-gap-2">
                <h1 className="fontHalvarBreit">Акоб Петросян</h1>

                <span className="job-title">Frontend-разработчик</span>
            </div>
        </header>
        )
}