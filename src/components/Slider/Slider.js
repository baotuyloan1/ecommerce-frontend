import {EastOutlined, WestOutlined} from "@mui/icons-material";
import "./Slider.scss"
import {useState} from "react";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const sliders = [
        'http://localhost:8080/images/slider-photos/2215307.jpg',
        'http://localhost:8080/images/slider-photos/Slider-Laptop.jpg',
        'http://localhost:8080/images/slider-photos/2215307.jpg',]

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
    }

    const nextSlide = () => {
        setCurrentSlide(currentSlide === sliders.length - 1 ? 0 : (prev) => prev + 1)
    }
    return (<div className='slider'>
        <div className='container' style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
            {sliders.map((slider, index) => <img key={index} src={slider}/>)}
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
                <WestOutlined/>
            </div>
            <div className="icon" onClick={nextSlide}>
                <EastOutlined/>
            </div>
        </div>
    </div>)
}

export default Slider