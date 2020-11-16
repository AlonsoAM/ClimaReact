import { useEffect, useState } from 'react'
import Clima from './components/Clima'
import Error from './components/Error'
import Formulario from './components/Formulario'
import Header from './components/Header'

function App() {
  // State del formulacio
  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: '',
  })

  const [consultar, setConsultar] = useState(false)

  const [error, setError] = useState(false)

  // Extraer datos
  const { ciudad, pais } = busqueda

  // Pasar valores de la API al state
  const [resultado, setResultado] = useState({})

  // crear el useEffect
  useEffect(() => {
    // consultar la API
    const consultarAPI = async () => {
      // http://api.openweathermap.org/data/2.5/weather?q=pisco,peru&appid=adb1d16777c24e5abe22a38ee9363518  --> De esta forma se llama a la API

      if (consultar) {
        // API Key
        const appID = 'adb1d16777c24e5abe22a38ee9363518'
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`

        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        setResultado(resultado)
        setConsultar(false)

        // Detecta si hubo resutados correctos en la consulta
        if (resultado.cod === '404') {
          setError(true)
        } else {
          setError(false)
        }
      }
    }

    consultarAPI()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [consultar])

  let componente
  if (error) {
    componente = <Error mensaje="No hay resultados" />
  } else {
    componente = <Clima resultado={resultado} />
  }

  return (
    <>
      <Header titulo="Clima React App" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                setBusqueda={setBusqueda}
                setConsultar={setConsultar}
              />
            </div>
            <div className="col m6 s12">{componente}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
