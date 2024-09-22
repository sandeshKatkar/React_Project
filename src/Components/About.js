import React from "react";

export default function About(props) {
    // const [toggelStyle , setMyStyle]= useState({
    //     color:"black",
    //     backgroundColor:"white",
    // })
    // let toggle=()=>{
    //     if(toggelStyle.color==='white'){
    //         setMyStyle({
    //             color:"black",
    //             backgroundColor:"white",
    //     })
    //     setBtnNAme("Dark mode");
    //     }
    //     else{
    //         setMyStyle({
    //             color:"white",
    //             backgroundColor:"black",

    //     })
    //     setBtnNAme("Light mode");
    //     }
    // }

    return (
        <div className="container my-5">
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className={`accordion-button collapsed bg-${props.modeAbout === "dark" ? "dark" : "light"
                                } text-${props.modeAbout === "dark" ? "light" : "dark"}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne"
                            style={{
                                backgroundColor: props.modeAbout === "dark" ? "black" : "white",
                            }}
                        >
                            About Us
                        </button>
                    </h2>
                    <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse text-light"
                        data-bs-parent="#accordionFlushExample"
                    >
                        <div
                            className={`accordion-body bg-${props.modeAbout === "dark" ? "dark" : "light"
                                } text-${props.modeAbout === "dark" ? "light" : "dark"}`}
                        >
                            Welcome to Textutile, your ultimate text customization app! We
                            empower you to transform your messages with ease, allowing you to
                            change text cases, styles, and formats effortlessly. Whether you
                            want to emphasize a point with uppercase, create a playful tone
                            with lowercase, or explore unique text transformations, Textutile
                            has you covered. Our user-friendly interface makes it simple to
                            personalize your communication, ensuring your messages stand out.
                            Join us in unleashing your creativity and enhancing your text
                            experience. With Textutile, your words can truly reflect your
                            style!
                        </div>
                    </div>
                </div>
                <div className="accordion-item ">
                    <h2 className="accordion-header">
                        <button
                            className={`accordion-button collapsed bg-${props.modeAbout === "dark" ? "dark" : "light"
                                } text-${props.modeAbout === "dark" ? "light" : "dark"}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo"
                            aria-expanded="false"
                            aria-controls="flush-collapseTwo"
                        >
                            Contact
                        </button>
                    </h2>
                    <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                    >
                        <div
                            className={`accordion-body bg-${props.modeAbout === "dark" ? "dark" : "light"
                                } text-${props.modeAbout === "dark" ? "light" : "dark"}`}
                        >
                            <h4>Mobile : 1290477464</h4>
                            <h4>Email : textutiles2014@gmail.com</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
