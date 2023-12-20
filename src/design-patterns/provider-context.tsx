import { createContext, useContext,  } from "react"

/* eslint-disable @typescript-eslint/no-explicit-any */
const ContextProvider = () => {
    // const [val,setVal]=useState("")
    return (
        <main>
            <Title />
        </main>
    )
}
//reducing the props  drilling

const treeTypeContext = createContext<string[] | any>([])
// const stateContext=createContext(null)

const Title = () => {
    const treeArray = ["timber", "palm", "pine", "oak"]
    return <>
        <h1>Save Trees</h1>
        <treeTypeContext.Provider value={treeArray}>
            <Heading />
        </treeTypeContext.Provider>
    </>
}

const Heading = () => {
    return <>
        <h2>Why Trees are important ?</h2>
        <ul>
            <SubHeading />
        </ul>
    </>
}
const SubHeading = () => {
    return <>
        <h3>Tree are important for:</h3>
        <SubSubHeading />
    </>
}
const SubSubHeading = () => {

    const context = useContext(treeTypeContext)
    return <ul>
        <li>Food </li>
        <li>Clean Air </li>
        <h5>Types of trees:</h5>{context.map((i:string) => <p>{i}</p>)}
    </ul>
}

export default ContextProvider