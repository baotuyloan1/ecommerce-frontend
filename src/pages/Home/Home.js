import Slider from '../../components/Slider/Slider'
import "./Home.scss"
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Categories from '../../components/Catrgories/Categories'
import Contact from '../../components/Contact/Contact'

const Home = () => {

    return <div className='home'><Slider/>
        <FeaturedProducts categoryId="1002" category="laptop"/>
        <Categories/>
        <FeaturedProducts categoryId="1003" category="phone"/>
        <Contact/>
    </div>
}

export default Home;