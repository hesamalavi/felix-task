import GetData from '../api/home';
import { icons } from '../common/Icons';
import { images } from '../common/Images';

import '../styles/Home.css';

function Home() {
    return (
        <div className="container">
            {GetData().map(({ code, title, id }, index) => (
                <div
                    className="background"
                    style={{
                        backgroundImage: 'url(' + images[index] + ')',
                    }}
                >
                    <div key={code} className="card">
                        {Object.values(icons).map(
                            (Value, i) =>
                                index === i && (
                                    <div className="icon">
                                        <Value color="white" fontSize="1.5em" />
                                    </div>
                                )
                        )}
                        <div className="content">
                            {code === '13' ? (
                                <a href="/target">
                                    <h3>
                                        {code} {title}
                                    </h3>
                                </a>
                            ) : (
                                <h3>
                                    {code} {title}
                                </h3>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Home;
