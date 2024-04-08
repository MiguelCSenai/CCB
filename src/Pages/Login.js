import { useState } from 'react';
import '../App.css';
import logo from '../Imagens/logo.png';

function Login() {

  const [inputValue, setInputValue] = useState('');

      const handleInputChange = (event) => {
        setInputValue(event.target.value); // Atualiza o valor do campo de entrada
      };

  const [inputValue2, setInputValue2] = useState('');

      const handleInputChange2 = (event) => {
        setInputValue2(event.target.value); // Atualiza o valor do campo de entrada
      };

  return (

    <>


    <div className='body'>
    <div className='fundo'/>

      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

      <div className="MainDivLogin">

        <img src={logo} alt='logo' className="logo" draggable="false"/>

        <div className='divTitulo'>

          <h1 className="titulo licorice">Camila Caires</h1>
          <h3 className="subtitulo">Boleria</h3>

        </div>

        <form>

        <div className="InputContainer roboto-condensed-strong">

          <input type="name" name="user" id="EmailInput" className="TextInput  roboto-condensed-large" required={true} onChange={handleInputChange}/>
          <label htmlFor="EmailInput" className={inputValue !== '' ? "ativado" : "desativado"}>Nome Completo</label>

        </div>
        <div className="InputContainer roboto-condensed-strong" id='tel'> 

        <input type="number" name="senha" id="PassInput" className="TextInput roboto-condensed-medium" maxlength="11" minlength="11" required={true} onChange={handleInputChange2}/>
          <label htmlFor="PassInput" className={inputValue2 !== '' ? "ativado" : "desativado"}>Telefone</label>

        </div>

          <div className="btn login">

            <input type="submit" value="Registrar-se" className="text Login"></input>
                      
          </div>

        </form>


        </div>


      </div>

      </>
  );
  
}

export default Login;
