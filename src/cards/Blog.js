import React from 'react'
import Customer from './Customer'
import Footer from './Footer'

const Blog = () => {
    return (
        <div>
            <div className="main">
                <h2>Blog</h2>
            </div>
            <div>
            <Customer/>
            </div>
            <Footer/>
        </div>
    )
}

export default Blog