/* eslint-disable @typescript-eslint/no-explicit-any */
// High Order Component
//High order function: The function which take a function as input
//High order component: The component which take component as input, can make chnages and return the modified Component

import React from "react";

const NormalComponent = ({ string }: { string?: string }) => {
    return <h1>{string}</h1>;
};

const Main = () => {
    return (
        <>
            <NormalComponent string={"normal component"} />
            <NewNormalComponent />
        </>
    );
};
// Naming convention: start with "with" + [componentName]
// Example: withAlert, but you can use any naming convention
const withAlert = (WrappedComponent: React.ComponentType<any>) => {
    return (props: any) => {
        return (
            <div>
                <p>This is the New Modified Normal Component</p>
                <WrappedComponent {...props} string="Modified Normal Component" />
            </div>
        );
    };
};

const NewNormalComponent = withAlert(NormalComponent);

export default Main;
