import './index.css';
function HomeTop() {
    return (
        <section className="car-ad header-marging">
            <div className="content">
                <h1>
                    The Better Way to <span>Buy a Car</span>
                </h1>
                <p className="description">
                    Good credit or bad credit, it doesn’t matter — Auto Lending Canada
                    will get you approved.
                </p>
                <p className="subtext">
                    No Appointments, No Obligation and Free to Apply
                </p>
                <div className="buttons">
                    <a href="#" className="primary-btn">
                        Apply Now
                    </a>
                    <a href="#" className="secondary-btn">
                        Learn More
                    </a>
                </div>
            </div>
            <div className="info">
                <img src={require(`./home-cars.png`)} />
            </div>
        </section>
    );
}

export default HomeTop;
