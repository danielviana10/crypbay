import { CardModalCompraDeCripto } from "../../components/Modais/ModalCompraDeCripto"
import { CardModalVendaDeCripto } from "../../components/Modais/ModalVendaDeCripto"




export const DashboardPage = () => {
    return (
        <>
            <h2>dashboard</h2>
            <CardModalCompraDeCripto />
            <CardModalVendaDeCripto />
        </>
    )
}