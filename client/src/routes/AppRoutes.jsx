
import {Routes, Route} from 'react-router-dom'
import GalleryPages from '../pages/GalleryPages/GalleryPages'
import NewImagePages from '../pages/NewImagePages/NewImagePages'


const AppRoutes = () => {

    return (

        <Routes>

            <Route path='/' element={<GalleryPages/>} />
            <Route path='/nuevaImagen' element={<NewImagePages/>} />
            <Route path='*' element={<h1>Error 404</h1>} />
            
            
        </Routes>
    )

}

export default AppRoutes