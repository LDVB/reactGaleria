
import { Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import EditImageForm from "../../components/EditImageForm/EditImageForm"
import "./ModifyImagePages.css"

const ModifyImagePages = () => {

    return (
        <>
          <Container>

              <h1 className="Name" >Modificar imagen</h1>
              <hr />
              <EditImageForm/>
              <Link to ='/'>
                <Button className="Button Volver">Volver</Button>
              </Link>
              


          </Container>
        </>

    )

}

export default ModifyImagePages