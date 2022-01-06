import Link from "next/link";

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ height: '60px' }}>
                <div className="container-fluid ps-4 header-title" style={{
                    color: '#f2f2f2',
                    fontSize: '23px'
                }}>
                    <Link className="navbar-brand header-link" href='/'>Ashole Kemon</Link>

                </div>
            </nav>
        </>
    )
}

export default Header
