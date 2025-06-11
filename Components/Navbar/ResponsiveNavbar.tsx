"use client";

import React, { useState } from 'react'
import Nav from './Nav'
import MobileNaveBar from './MobileNaveBar'

const ResponsiveNavbar = () => {
    const [showNav, setShowNav] = useState<boolean>(false);

    const showNavHandler = () => setShowNav(true);
    const closeNavHandler = () => setShowNav(false);

    return (
        <div>
            <Nav openNav={showNavHandler} />
            <MobileNaveBar showNav={showNav} closeNav={closeNavHandler} />
        </div>
    )
}

export default ResponsiveNavbar
