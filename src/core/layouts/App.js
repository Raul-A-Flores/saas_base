import { useRouter } from "next/router"
import Meta from "../components/Meta"
import Navbar from "../components/Navbar"


const hiddenNavbarPages =['/success']

export default function AppLayout({children}) {

    const router = useRouter()
    const hideNavebar = hiddenNavbarPages.includes(router.asPath)

    return(
        <>
        <Meta />
        { hideNavebar ? null : <Navbar />}
 
        {children}
        </>
    )
}
