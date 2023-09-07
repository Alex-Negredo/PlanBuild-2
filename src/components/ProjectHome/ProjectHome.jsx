import HomePic from '../../assets/Project Home.svg';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import './ProjectHome.scss';

const ProjectHome = (props) => {

    return (
        <div>
            <Header />
            <div className='project__master-container'>
                <Sidebar  />
                <img src={HomePic} alt="Project Home" className="project__home-pic"/>
            </div>
        </div>
    )
}

export default ProjectHome