import Header from './Header/Header';
import Footer from './Footer/Footer';

function Defaultlayout({ children }) {
    return (
        <>
            <Header></Header>
            {children}
            <Footer></Footer>
        </>
    );
}

export default Defaultlayout;
