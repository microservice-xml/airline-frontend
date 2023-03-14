import InfoCard from '../../components/InfoCard';
import './index.scss'

const LandingPage = () => {


    return(<div className='landing'>
        <div className='landing__cards'>
            <div className='landing__cards-container'>
                <InfoCard title='Cheap Flights' routerUrl='/news' imgUrl={require('../../assets/images/icons/takeoff1.png')}/>
                <InfoCard title='Latest blogs' routerUrl='/news' imgUrl={require('../../assets/images/icons/blogs.png')}/>
                <InfoCard title='Explore the world' routerUrl='/news' imgUrl={require('../../assets/images/icons/planet.png')}/>
            </div>
        </div>
    </div>)
}

export default LandingPage;