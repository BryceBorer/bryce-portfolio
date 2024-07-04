import "./Home.scss";
import github from "../../assets/icons/github_icon.svg"
import linkedIn from '../../assets/icons/linkedin_icon.svg'
import CopyEmailButton from '../../Components/CopyEmailButton/CopyEmailbutton';

const Home = () => {

    return (
        <section className="home">
            <div className="home__content">
                <div className="home__content__text">
                    <h1 className="home__content__text--name">Insert</h1>
                    <h1 className="home__content__text--name">&lt;Buzzword/&gt;</h1>
                    <h1 className="home__content__text--name">Here ^</h1>
                </div>
                <div className="home__content__contact">
                    <a href="https://github.com/BryceBorer" className="home__content__contact__link">
                        <img className="home__content__contact__link--img"
                            src={github}
                            alt="Github"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/bryceptborer/" className="home__content__contact__link">
                        <img className="home__content__contact__link--img"
                            src={linkedIn}
                            alt="Linked In"
                        />
                    </a>
                    <CopyEmailButton className="home__content__contact__link" />
                </div>
            </div>
        </section>
    );
};
export default Home;
