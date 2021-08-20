import React from 'react'

const Projects = () => {
    const c = 'Contrary to popular belief, Lorem Ipsum is not simply random text.\
                It has roots in a piece of classical Latin literature from 45 BC, making\
                it over 2000 years old. Richard McClintock, a Latin professor at \
                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin\
                words, consectetur, from a Lorem Ipsum passage, and going through the cites \
                of the word in classical literature, discovered the undoubtable source. \
                Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et\
                Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. \
                This book is a treatise on the theory of ethics, very popular during the \
                Renaissance.'
    return (
            <div className="grid-container">
                
                <div className="item">
                    <img src={require('./django1.jpg').default} alt="aaa"/>
                    <h1>Lorem Ipsum</h1>
                    <h2>1.Jul.2020</h2>
                    <p>{`${c.substring(0,115)}...`}</p>
                </div>
                <div className="item">
                    <img src={require('./django1.jpg').default} alt="aaa"/>
                    <h1>project name</h1>
                    <h2>1.Jul.2020</h2>
                    <p>{`${c.substring(0,115)}...`}</p>
                </div>
                <div className="item">
                    <img src={require('./django1.jpg').default} alt="aaa"/>
                    <h1>project name</h1>
                    <h2>1.Jul.2020</h2>
                    <p>{`${c.substring(0,115)}...`}</p>
                </div>
                <div className="item">
                    <img src={require('./django1.jpg').default} alt="aaa"/>
                    <h1>project name</h1>
                    <h2>1.Jul.2020</h2>
                    <p>{`${c.substring(0,115)}...`}</p>
                </div>
                <div className="item">
                    <img src={require('./django1.jpg').default} alt="aaa"/>
                    <h1>project name</h1>
                    <h2>1.Jul.2020</h2>
                    <p>{`${c.substring(0,115)}...`}</p>
                </div>
                <div className="item">
                    <img src={require('./django1.jpg').default} alt="aaa"/>
                    <h1>project name</h1>
                    <h2>1.Jul.2020</h2>
                    <p>{`${c.substring(0,115)}...`}</p>
                </div>
                
            </div>

    );
}
export default Projects;