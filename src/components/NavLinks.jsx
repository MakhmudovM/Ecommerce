import { NavLink } from "react-router-dom"

const links = [
    
    {
        id: 2,
        url: "/colections",
        text: "Collections",
    },
    {
        id: 3,
        url: "/man",
        text: "Men",
    },
    {
        id: 4,
        url: "/wome",
        text: "Women",
    },
    {
        id: 5,
        url: "/about",
        text: "About",
    },
    {
        id: 6,
        url: "/contact",
        text: "Contact",
    },
    
    
]

function NavLinks() {
  return (
    <>
    {links.map((link) => {
        return (
            <li  key={link.id}> <NavLink to={link.url}>
            {link.text}
        </NavLink>
        </li>
        )
    })}
    </>
  )
}

export default NavLinks