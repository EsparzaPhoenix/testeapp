import Image from "next/image";
import Style from "../../styles/layout/app/batata/batata.module.scss";

export default function Batata(){
    return(
        <main className= {`${Style["batata"]}`}>
            <h1>Batata</h1>
            <Image src="/image/fuck.png" width={967} height={940}></Image>
        </main>
    )
}