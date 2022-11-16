import Header from './Header/Header';
import Footer from './Footer/Footer';

function Defaultlayout({ children }) {
    return (
        <>
            <Header>Header</Header>
            {children}
            {/* <Container>Container</Container> */}
            <Footer>Footer</Footer>
        </>
    );
}

export default Defaultlayout;
