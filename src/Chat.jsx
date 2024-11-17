import React , {useState,useEffect} from 'react';

const Resize = () =>{
    const [screenSize, setScreenSize] = useState({
        width : window.innerWidth,
        height: window.innerHeight,
    });

    const updateScreenSize =() => {
        setScreenSize({
            width : window.innerHeight,
            height : window.innerHeight,
        });
    };


    useEffect(() =>{
        window.addEventListener('resize', updateScreenSize);

        return () => {
            window.removeEventListener('resize', updateScreenSize);
        };
    }, []);

    return (
        <div>
            <h1>Screen Size Example</h1>
            <p>Resize the window to see the Screen size:</p>
            <p style={{color : "Red"}}>Width : {screenSize.width}px</p>
            <p style={{color : "Red"}}>Width : {screenSize.height}px</p>
        </div>
    );
};

export default Resize;