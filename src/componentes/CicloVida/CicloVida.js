import { useEffect } from "react";

const CicloVida = ({numero}) => {
    useEffect(() => {
        return () => {
        };     
    },[]);

    useEffect(() => {
        return () => {
            <h2>{numero}</h2>
        };
    })

    return (
        <h2>{numero}</h2>
    ) 
};

    

export default CicloVida