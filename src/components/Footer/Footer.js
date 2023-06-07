import "./footer.scss"

const Footer = () => {
    return <div className='footer'>
        <div className='top'>
            <div className='item'>
                <h1>Categories</h1>
                <span>Phone</span>
                <span>Laptop</span>
                <span>Tablet</span>
                <span>Samsung</span>
            </div>

            <div className='item'>
                <h1>Links</h1>
                <span>Phone</span>

            </div>
            <div className='item'>
                <h1>About</h1>
                <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting
        </span>
            </div>
            <div className='item'>
                <h1>Contact</h1>
                <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
        </span>
            </div>
        </div>
        <div className='bottom'>
            <div className='left'>
                <span className='logo'>BaoStore</span>
                <span className='copyright'>
                    Copyright 2023 by Bao Nguyen
                </span>
            </div>

            <div className='right'>
                <img src='/img/payment.png'/>
            </div>
        </div>
    </div>
}

export default Footer;