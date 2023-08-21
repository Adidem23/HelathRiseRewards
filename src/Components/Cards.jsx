import '../Components/Cards.css';


const Cards = () => {
    return (
        <section className="card-section">

            <h2 className="explore-heading">Explore Features</h2>
            <div className="card-container">
                <div className="card">
                    <div className="icon">
                        <img src="https://img.freepik.com/free-vector/cute-astronaut-waving-hand-game-controller-cartoon-vector-icon-illustration-technology-science-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3714.jpg?size=626&ext=jpg&ga=GA1.2.97462443.1689537207&semt=ais" />
                    </div>
                    <p className="title">Games</p>
                    <p className="text">If you are Game Freak.Play Some Simple games and Make Your Pockets Heavy Bruhh!!</p>
                    <button className='btn'>Start</button>
                </div>

                <div className="card">
                    <div className="icon">
                        <img src="https://img.freepik.com/free-vector/cute-astronaut-waving-hand-game-controller-cartoon-vector-icon-illustration-technology-science-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3714.jpg?size=626&ext=jpg&ga=GA1.2.97462443.1689537207&semt=ais" />
                    </div>
                    <p className="title">Games</p>
                    <p className="text">If you are Game Freak.Play Some Simple games and Make Your Pockets Heavy Bruhh!!</p>
                    <button className='btn'>Start</button>
                </div>

            </div>
        </section>
    );
};

export default Cards;
