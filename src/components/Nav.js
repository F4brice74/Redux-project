import React, { useState } from 'react'
import { Constant, Request} from '../service/index'

const {TOP_STORIES, MOST_POPULAR} = Constant

const styles = {
    left: {
        borderTopLeftRadius: "20px",
        borderBottomLeftRadius: "20px",
    },
    right: {
        borderTopRightRadius: "20px",
        borderBottomRightRadius: "20px",
    },
    info: { padding: 0, listStyleType: "none", fontSize: "14px" },
};

const Nav = ({updateRequest}) => {
    const links = ["Top Stories", "Most Popular"];
    const [active, setActive] = useState("Top Stories")
    return (

        <div className="d-flex justify-content-center mb-4">
            <ul
                class="nav nav-pills nav-fill"
                style={{ marginTop: "20px", width: "70%" }}
            >
                {links.map((link, index) => {
                    return (
                        <li class="nav-item" onClick={() => {
                            setActive(link)
                            updateRequest( index === 0 ? TOP_STORIES : MOST_POPULAR)
                            }
                            
                        }
                            >
                            <a
                            class={`nav-link ${link === active && "active"}`}
                            href="#"
                            style={index===0 ? styles.left : styles.right}>
                            {link}
            </a>
                        </li>
                    )

                })}



            </ul>
        </div>
    )
}

export default Nav