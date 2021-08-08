import GetData from '../api/target';

const Target = () => {
    const test = GetData().map(title => title.targets);
    return (
        <div className="container">
            {test[0]?.map(title => (
                <div key={title.title} className="content">
                    <h3 style={{ color: 'black' }}>{title.title}</h3>
                </div>
            ))}
        </div>
    );
};

export default Target;
