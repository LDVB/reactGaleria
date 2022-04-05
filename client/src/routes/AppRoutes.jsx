
import {Routes, Route} from 'react-router-dom'
import GalleryPages from '../pages/GalleryPages/GalleryPages'
import ImagePages from '../pages/ImagePages/ImagePages'
import ModifyImagePages from '../pages/ModifyImagePages/ModifyImagePages'
import NewImagePages from '../pages/NewImagePages/NewImagePages'


const AppRoutes = () => {

    return (

        <Routes>

            <Route path='/' element={<GalleryPages/>} />
            <Route path='/nuevaImagen' element={<NewImagePages/>} />
            <Route path='/detallesImagen/:id' element={<ImagePages/>} />
            <Route path='/modificarImagen/:id' element={<ModifyImagePages/>} />
            <Route path='*' element={<h1>Error 404</h1>} />
            
            
        </Routes>
    )

}

export default AppRoutes