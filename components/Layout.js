import Head from 'next/head';
import Header from './Header';
import googleAnalytics from '../utils/googleAnalytics';

const Layout = ({ children, header = false }) => {
    return (
        <>
            <Head>
                {/* Required meta tags */}
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />

                {/* <!-- Bootstrap CSS --> */}
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />

                {/* Font Awasome */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />

                <title>Ashole Kemon</title>
            </Head>
            {!header ? (
                <Header />
            ) : null}
            <div className="container">
                {children}
            </div>

            {/* <!-- Optional JavaScript; choose one of the two! --> */}

            {/* <!-- Option 1: Bootstrap Bundle with Popper --> */}
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></script>

        </>
    );
}

export default Layout;