import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// Import React FilePond
import { FilePond, File, registerPlugin } from 'react-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondOptions from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

// Register the plugins
registerPlugin(FilePondOptions, FilePondPluginImagePreview)

// Our app
function ImagenTarea() {
    const [files, setFiles] = useState([]);
    console.log(files);
    return (
        <div className="App">
            <FilePond
                files={ files }
                onupdatefiles={ setFiles }
                allowMultiple={ false }
                server={ {
                    process: {
                        url: `${process.env.REACT_APP_BACKEND_URL}/api/tareas/archivos`,
                        method: 'POST',
                        onload: (response) => { const file = JSON.parse(response) }
                    }
                }
                }
                // server={ `${process.env.REACT_APP_BACKEND_URL}/api/tareas/archivos` }
                maxFiles={ 1 }
                name="files"
                labelIdle='Selecciona & Arrastra tus archivos o <span class="filepond--label-action">buscalos aquí</span>'
            />
        </div>
    )
}

export default ImagenTarea
