import "./App.css";
import "./DarkApp.css"
import { useState } from "react";
import DarkApp from "./DarkApp";
import App from "./App";
import Switch from "react-switch";


export default function Header() {
    const [checked, setChecked] = useState(true);
    const handleChange = nextChecked => {
        setChecked(nextChecked);
    };
    console.log(checked);
    return (
        <>
            <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            {
                checked ?
                    <>
                        <div className="head">

                            <div className="site">

                                <h2>ARTISTS_ARE_SCAMMERS</h2>
                            </div>
                            <div className="he">
                                <div className="signup">
                                    <p>SIGN TO</p>
                                    <p>NEWSLETTER</p>
                                </div>
                                <span className="material-symbols-outlined">
                                    arrow_forward_ios
                                </span>
                            </div>

                            <div className="he">
                                <div className="bAs">
                                    <p>BUY AND SELL NFTS FROM THE</p>
                                    <p>WORLD'S TOP ARTISTS</p>
                                </div>
                                <span class="material-symbols-outlined">
                                    arrow_forward_ios
                                </span>
                            </div>
                            <button className="optbutton" >
                                <span className="material-symbols-outlined">menu</span>
                            </button>


                        </div>
                        <App />
                    </>
                    :
                    <>
                        <div className="Darkhead">

                            <div className="Darksite">

                                <h2>ARTISTS_ARE_SCAMMERS</h2>
                            </div>
                            <div className="Darkhe">
                                <div className="Darksignup">
                                    <p>SIGN TO</p>
                                    <p>NEWSLETTER</p>
                                </div>
                                <span className="material-symbols-outlined">
                                    arrow_forward_ios
                                </span>
                            </div>

                            <div className="Darkhe">
                                <div className="DarkbAs">
                                    <p>BUY AND SELL NFTS FROM THE</p>
                                    <p>WORLD'S TOP ARTISTS</p>
                                </div>
                                <span class="material-symbols-outlined">
                                    arrow_forward_ios
                                </span>
                            </div>
                            <button className="Darkoptbutton" >
                                <span className="material-symbols-outlined">menu</span>
                            </button>


                        </div>
                        <DarkApp />
                    </>

            }



        </>
    );
}
