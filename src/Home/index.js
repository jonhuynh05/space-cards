import React, {useState, useEffect} from 'react'
import { withRouter, Link } from 'react-router-dom'

function Home() {
    const [test, setTest] = useState(false)
  
    return(
        <div>
            <div className="header">
                Get Ready To Learn About Space!
            </div>
            <div className="description">
                CosmoCards is here to help you learn about all things space. Pick one of the categories below to start going through flashcards!
            </div>
            <div className="select">
                Select A Category
            </div>
            <div className="category-container">
                <Link to="/curiosity">
                    <div className="category">
                        Curiosity
                    </div>
                </Link>
                <div className="category">
                    Category Name 2
                </div>
                <div className="category">
                    Category Name 3
                </div>
                <div className="category">
                    Category Name 4
                </div>
                <div className="category">
                    Category Name 5
                </div>
                <div className="category">
                    Category Name 6
                </div>
            </div>
        </div>
    )
}

export default withRouter(Home)