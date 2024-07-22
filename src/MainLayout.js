import './App.css';
import { Outlet } from 'react-router-dom';
import HeadID from './component/HeadID';
import Footer from './component/Footer';


const MainLayout = () => {
    return (
        <div>
            <HeadID />
            <main>
                <Outlet />
            </main>
            <footer className="bg-dark" id="tempaltemo_footer">
                <Footer />
            </footer>
        </div>
    );
};

export default MainLayout; 