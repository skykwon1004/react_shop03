import { useParams } from "react-router-dom";

const Itm = ({ shopData }) => {
    const { itm } = useParams();
    const Itm = shopData.find(it => String(it.id) === itm)
    //String ( ) 문자로 만들어버림 === 일치

    return (
        <>
            {
                Itm &&
                <figure className="itm">
                    Itm : {Itm.name}
                </figure>
            }
        </>

    )
}

export default Itm;