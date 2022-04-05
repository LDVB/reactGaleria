
import { Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import NewImageForm from "../../components/NewImageForm/NewImageForm"
import "./NewImagePages.css"

const NewImagePages = () => {

    return (
        <>
          <Container>

              <h1 className="Name" >Nueva imagen</h1>
              <hr />
              <NewImageForm/>
              <Link to ='/'>
                <Button className="Button Volver">Volver</Button>
              </Link>
              


          </Container>
        </>

    )

}

export default NewImagePages