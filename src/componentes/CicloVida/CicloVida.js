import { useEffect } from "react";

const CicloVida = ({numero}) => {
    useEffect(() => {
        return () => {
        };     
    },[]);

    useEffect(() => {
        return () => {
            
        };
    })

    return (
        <h2>{numero}</h2>
    ) 
};

    

export default CicloVida