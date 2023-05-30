import Header from 'components/Header';
import Footer from 'components/Footer';
import Introduction from 'components/Introduction';
import Portfolios from 'components/Portfolios';
import Timeline from 'components/Timeline';
import Skills from 'components/Skills';

const Home:React.FC = () =>{
    return (
        <div style = {{backgroundColor:'#e3dddd'}}>
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