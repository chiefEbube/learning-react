function Header() {
    return (
        <header>
            <nav className="nav-bar">
                <img className="nav-logo" src="./react-logo.png"/>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function MainContent() {
    return (
        <div className="main-content">
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
        </div>
    )
}

function Footer() {
    return (
        <footer>
            <small>© 2021 Ziroll development. All rights reserved.</small>
        </footer>
    )
}
function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Page />)





// const ListPage = () => {
//     return(
//             <ul>
//                 Reasons I'm excited about learning React
//                 <li>It's lucrative</li>
//                 <li>It's easier</li>
//                 <li>It's fdvldkmglkr</li>
//                 <li>It's d.fmkdl</li>
//             </ul>

//     )
// }

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<ListPage />)


// const newEl = (
//     <div>
//         <h1>Hey man</h1>
//         <p>I am</p>
//         <span>an element</span>
//         <div>
//             <strong>To be hehe</strong>
//         </div>
//     </div>

// )

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(newEl)

// function MainContent() {
//     return (
//         <div>
//             <h1>Mehn, React is reacting and responding</h1>
//             <p>Don't you just love this?</p>
//         </div>
//     )
// }

// function NavBar(){
//     return(
//         <spam>I nu kwa</spam>
//     )
// }

// ReactDOM.render(
//     <div>
//     <MainContent/>
//     <NavBar/>
//     </div>,
//     document.getElementById("root")
// )

