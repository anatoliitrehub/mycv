import React from "react";
import data from "../src/data/data.json";
import me from "./images/me.jpg";


export default function Main() {
    let profile = '';
    profile = `I’m hard-working, open for new opportunities and eager to learn new. I’m open for various challenging projects. I like solving problems and achieving new experience. 

I am interested in developing new projects from scratch and updating existing ones in
Javascript and React.js with css. 

I have developed several learning projects:<br>
- simple and engineering calculator,<br>
- mini project weather show and exchange rates (privatbank api),<br>
- front end of tickets ordering service,<br>
- front end of online store cart with Modal window,<br>
- project for messaging front-end with the back-end(using openserver)`;
    return (
        <>
            <div className="body-bg">
                <div className="container">
                    <div className="row">


                        <div className=" mt-50 col-lg-4 cv-left">
                            {/* <h1>Main</h1> */}
                            <div className="mt-100">
                                <img src={me} className=' w-50 img-fluid rounded-circle border border-white border-5' />
                                <h1 className="mt-100">{data.name}</h1>
                                <h4>{data.position}</h4>
                                <ul>
                                    <li className="cont"><a className="profiler" href="telto:" >{data.contact_tel}</a></li>
                                    <li className="cont"><a className="profiler" href="mailto:">{data.contact_mail}</a></li>
                                    <li className="cont"><a className="profiler" href="callto:">Skype: {data.contact_skype}</a></li>
                                    <li className="cont"><a className="profiler" href={data.contact_link} target="_blank"><u>LinkedIn</u></a></li>
                                    <li className="cont"><a className="profiler" href={data.contact_git} target="_blank"><u>GitHUB</u></a></li>

                                </ul>

                                <h2 className="mt-100">Skills</h2>
                                <ul>
                                    {data.skills.map(elem =>
                                        <li key={Math.random()}>{elem}</li>
                                    )}
                                </ul>

                                <h2 className="mt-100">Projects</h2>
                                <ul>
                                    <li className="cont"><a href="https://anatoliitrehub.github.io/unit_12/" target="_blank">Cart_deploy</a></li>
                                    <li className="cont"><a href="https://anatoliitrehub.github.io/aviasales/" target="_blank">Avia_deploy</a></li>
                                    <li className="cont"><a href="https://chatreenbit.herokuapp.com/" target="_blank">Chat_deploy</a></li>

                                </ul>

                            </div>
                        </div>

                        <div className="col-lg-8 cv-right">
                            <h1 className="pt-5">Profile:</h1>
                            <div className="profile">
                                <div>I’m hard-working, open for new opportunities and eager to learn new. I’m open for various challenging projects. I like solving problems and achieving new experience.

                                    I am interested in developing new projects from scratch and updating existing ones in
                                    Javascript and React.js with css.

                                    I have developed several learning projects:
                                    <ul>
                                        <li className="proj">- simple and engineering calculator,</li>
                                        <li className="proj">- mini project weather show and exchange rates (privatbank api),</li>
                                        <li className="proj">- front end of tickets ordering service,</li>
                                        <li className="proj">- front end of online store cart with Modal window,</li>
                                        <li className="proj">- project for messaging front-end with the back-end(using openserver)</li>
                                    </ul></div>
                            </div>
                            <h1 className="pt-5">Work Experience:</h1>
                            <dl>
                                {data.experience.map(elem => {
                                    return (
                                        <>
                                            <dt>{elem[0]}, <span className="">{elem[1]}</span></dt>
                                            {/* <dd>{elem[1]}</dd> */}
                                            <dd>{elem[2]}</dd>
                                        </>
                                    )
                                })}
                            </dl>

                            <h1 className="pt-5">Education:</h1>
                            <dl>
                                {data.education.map(elem =>
                                    <dt className="m-3 text-left" key={Math.random()}>{elem}</dt>
                                )}
                            </dl>

                            <h1 className="pt-5">Additional education:</h1>
                            <dl className="text-right font-italic">
                                {data.addeducation.map(elem =>
                                    <>
                                        <dt className="mt-3 text-left font-italic" key={Math.random()}>{elem[0]}</dt>
                                        <dd><a href={elem[1]} target="_blank">Sertificate</a></dd>
                                    </>
                                )}
                            </dl>


                        </div>



                    </div>

                </div>

            </div>
        </>
    )
}