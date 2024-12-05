import Page1 from './page1';
import Page4 from './page4';
import Page3 from './page3';
import Vehicle from './page2';
import { connect } from 'react-redux';
import Header from './header';
import Footer from './footer';


function Home({commonData})
{
    
    return(
        <div  style={{backgroundColor:commonData.bgColorMode, color:commonData.colorMode}} >
            {/* <Header/> */}
            {/* Page1 */}
            <Page1/>
           

            {/* Page2 */}
            <Vehicle/>
            <br/><br/><br/><br/>

            {/* Page 3 */}
            <Page3/>
            <br/><br/><br/><br/>

             {/* Page 4 */}
            <Page4/>   
            <Footer/>         
        </div>
    );
}

let connectToStore = (state)=>({commonData:state})
export default connect(connectToStore)(Home);