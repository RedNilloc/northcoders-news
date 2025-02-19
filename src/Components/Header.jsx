import CatPNG1 from "../assets/CatPNG1.png"


function Header() {
    return <>
    <div class = "header">
    <h1 >Northcoders News </h1>
    </div>
    <div>
    <p>Read your News and Admire the Mews!<img src={CatPNG1} alt="An adorable kitten" id="header-kitten"/></p>
    </div>
    </>
}

export default Header