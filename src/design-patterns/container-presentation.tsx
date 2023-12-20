import { useState } from "react"
//The parent component contain any of the logic part is meant to be container-presentation pattern 

const ContainerPresentation = () => {

    const [string, setString] = useState("hello")
    const newString = () => {
        if (string == "hello") setString("hi")
        else if (string == "hi") {
            setString("how r u")
        }
        else {
            setString("hello")
        }
    }
    return (
        <div>
            <button onClick={newString}>Change String</button>
            <ChangeString string={string} />
        </div>
    )
}

const ChangeString = ({ string }: { string: string }) => {
    return <>
        <p>{string}</p>
    </>
}
export default ContainerPresentation