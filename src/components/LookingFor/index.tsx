import './index.css';
function LookingFor() {
    const lookingTabs = [
        {
            title: "Coupes",
            active: false,
        },
        {
            title: "Hatchback",
            active: true,
        },
        {
            title: "Sedans",
            active: false,
        },
        {
            title: "Minivans",
            active: false,
        },
        {
            title: "SUVs & Crossovers",
            active: false,
        },
        {
            title: "Trucks",
            active: false,
        },
    ];
    return (
        <section className="looking-for">
            <div className="sec-title">
                Car Loans for All Makes and Models – Fast Approval!
            </div>
            <div className="looking-for-row">
                <div className="content">
                    <img src={require(`./single-car.png`)} />
                </div>
                <div className="info">
                    <div className="desc">What type of vehicle are you looking for?</div>
                    <div className="looking-for-tabs">
                        {Object.entries(lookingTabs).map(([key, looking]) => (
                            <div key={key} className={looking.active ? "tab active" : "tab"}>
                                {looking.title}
                            </div>
                        ))}
                    </div>
                    <a href="#" className="primary-btn">
                        Apply Now
                    </a>
                </div>
            </div>
        </section>
    );
}

export default LookingFor;
