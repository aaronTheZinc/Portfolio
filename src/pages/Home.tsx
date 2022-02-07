import React, { useContext, useEffect, useRef, useState } from "react";
import { blue, yellow } from "../theme";
import {
    ProfileCard,
    ProfileDescription,
    ProfileProjects,
} from "../components";
import { Members } from "../data";
import { AppContext } from "../context";
import FadeIn from "react-fade-in";
import Swal from "sweetalert2"
import { Person } from "../types";
import "./index.css";

export default function Home(): JSX.Element {
    const [person, setPerson] = useState<Person>(Members[0]);
    const ContentViewRef = useRef(null);
    const { member } = useContext(AppContext);
    useEffect(() => {
        Swal.fire({
            title: '<strong>Welcome!</strong>',
            icon: 'info',
            html:
                `My name is <span style="color:${yellow};font-weight: bold;">Aaron Marsh </span>! I created this website using <u> <b> React JS </b> </u>'
                This is a portfolio website used to display the achievements of myself, <u>Arnob </u> and <u>Camille! </u>`,
            showCloseButton: true,
            showCancelButton: false,
            focusConfirm: false,
            confirmButtonText:
                '<i class="fa fa-thumbs-up"></i> Great!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
        })
    }, []);

    useEffect(() => {
        console.log(Members.filter((el) => el.id === member)[0]);
        setPerson(Members.filter((el) => el.id === member)[0]);
    }, [member]);

    useEffect(() => {

    }, [person])

    return (
        <div className="h-screen scrollbar-hide" style={{ backgroundColor: yellow }}>
            <div className="md:flex">
                <div className="md:w-1/2 sm:order-2">
                    <div className="p-10">
                        <FadeIn transitionDuration={1000}>
                            {Members.map((p, i) => (
                                <ProfileCard key={i} person={p} />
                            ))}
                        </FadeIn>
                    </div>
                </div>
                <div className="md:w-1/2 md:p-10  sm:order-1 ">
                    <div
                        ref={ContentViewRef}
                        style={{ backgroundColor: blue }}
                        className="h-full w-full"
                    >
                        <div>
                            <div className="p-10">
                                <label
                                    className={`text-white text-3xl text-center m-5 Courier`}
                                >
                                    {person.firstName}
                                </label>
                                <label
                                    style={{ color: yellow }}
                                    className="text-xl font-thin"
                                >{` ~ ${person.major}`}</label>
                            </div>
                            <div>
                                <ProfileDescription email={person.email} links={person.links} description={person.description} />

                                {person.projects ? (
                                    <>
                                        <ProfileProjects projects={person.projects} />
                                    </>
                                ) : <> </>}
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
