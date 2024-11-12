function HomePage() {
    return (
        <div className="home">
            <header>
                <h1>
                    a <span className="creative"></span> creative <span className="color">ui/ux</span> designers studio <span className="studio"><button><ion-icon name="play"></ion-icon></button></span>
                </h1>
                <section className="header-info">
                    <div className="pub"></div>
                    <div className="growth">
                        <section className="work"></section>
                        <section className="touch">
                            <p>
                                We are helping people to grow their business. We are providing the best designs and development service for your next dream project
                            </p>
                            <button>Get In Touch</button>
                        </section>
                    </div>
                </section>
            </header>
            <main>
                <div className="creating">
                    <h1>
                        <span className="color">creating</span> designs that solve <i>problems</i>
                    </h1>
                    <section className="creating-options">
                        <div className="image-box"></div>
                        <ul>
                            <li> <span className="hot"><ion-icon name="return-up-forward-outline"></ion-icon></span> ui/ux design</li>
                            <li> <span className="hot"><ion-icon name="return-up-forward-outline"></ion-icon></span> graphic design</li>
                            <li> <span className="hot"><ion-icon name="return-up-forward-outline"></ion-icon></span> illustration</li>
                            <li> <span className="hot"><ion-icon name="return-up-forward-outline"></ion-icon></span> logo & branding</li>
                        </ul>
                    </section>
                </div>
            </main>
        </div>
    )
}

export default HomePage;