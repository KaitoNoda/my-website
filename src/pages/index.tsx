import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Introduction from 'components/Introduction/Introduction';
import Portfolios from 'components/Portfolios/Portfolios';
import Timeline from 'components/Timeline/Timeline';
import Skills from 'components/Skills/Skills';

const Home:React.FC = () =>{
    return (
        <div style = {{backgroundColor:'lightblue'}}>
            <Header/>
            <Introduction/>
            <Portfolios/>
            <Timeline />
            <Skills />
            <Footer />
        </div>
    )
}

export default Home;