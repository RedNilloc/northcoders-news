import PoopEmoji2 from "../assets/PoopEmoji2.png"

console.log(PoopEmoji2)

function Header() {
    return <>
    <div class = "header">
    <h1 >Northcoders News </h1>
    </div>
    <div>
    <p>It Won't Give You the <img src={PoopEmoji2} alt="A smiling poop" id="header-poop"/>s!</p>
    </div>
    </>
}

export default Header