import './index.css';
function waysToBuy() {
    const waysToBuy = [
        {
            img: "budget.png",
            title: "Budget Discovery",
            desc: "The first step is to learn what your true budget is, in other words what you can actually get approved for.",
        },
        {
            img: "finance.png",
            title: "Financing Approval",
            desc: "Once we have your application we will work to get you the best approval options possible.",
        },
        {
            img: "vehicle.png",
            title: "Vehicle Selection",
            desc: "We will present you with a variety of vehicles that you already qualify for.",
        },
    ];
    return (
        <section className="ways-to-buy">
            <div className="content">
                <h1>The Smart Way to Buy a Car</h1>
                <p className="description">
                    Take control of your car shopping experience. Get approved for a car
                    loan and find your perfect vehicle all from the comfort of your own
                    home in under 3 minutes.
                </p>
            </div>
            <div className="info">
                {Object.entries(waysToBuy).map(([key, ways]) => (
                    <div key={key} className="way-sec-container">
                        <div className="way-section">
                            <div className="way-img">
                                <img src={require(`./${ways.img}`)} />
                            </div>
                            <div className="way-info">
                                <h2>{ways.title}</h2>
                                <div className="way-desc">{ways.desc}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default waysToBuy;
