import React from "react";
import blogo from './blogo.svg';

export default function NavigationBar(){
    const NavBarItems = ({title, to}) => {
        return(
            <>
            <button className="text-xl hover:font-bold hover:duration-500 self-center">
                {title}
            </button>
            </>
        
        );
        }
    return(

    <div className="flex fixed top-4 right-8 left-8 rounded-3xl h-20 backdrop-blur-md hover:backdrop-blur-xl bg-white bg-opacity-50">
        <img src={blogo} className="w-24 ml-8"/>
        <div className="space-x-8 self-center">

        <NavBarItems title="Home" to="./Home"/>
        <NavBarItems title="Our Services" to="./Services"/>
        <NavBarItems title="Contact Us" to="./Contact"/>
        <NavBarItems title="What Our Clients Say" to="./Testimonials"/>
        <NavBarItems title="About Us" to="./About"/>

        </div>




        
    </div>

    )



}
