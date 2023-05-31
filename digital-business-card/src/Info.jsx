import React from "react";
import avatar from "./assets/avatar.png"

export default function Info() {
    return (
        <div className="info">
            <img src={avatar} alt="" />
            <h1>Chief Ebube</h1>
            <em>Frontend Developer</em>

            <button className="email"><i class="fa-solid fa-envelope"></i>Email</button>
            <button className="linked"><i class="fa-brands fa-linkedin"></i>LinkedIn</button>
        </div>
    )
}