import { useState } from 'react';
import '../App.css';
import logo from '../Imagens/Logo.png'

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

      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

      <div className="bodycontainer"></div>

      <div className="MainDivLogin">

        <img src={logo} alt='logo' className="logo" draggable="false"/>

        <h1 className="titulo oswald-large">The Final Touch</h1>

        <form>

        <div className="InputContainer reddit-mono-medium">

          <input type="email" name="user" id="EmailInput" className="TextInput" required={true} onChange={handleInputChange}/>
          <label htmlFor="EmailInput" className={inputValue !== '' ? "ativado" : "desativado"}>Email ou nome de usuário</label>

        </div>
        <div className="InputContainer reddit-mono-medium"> 

          <input type="password" name="senha" id="PassInput" className="TextInput"required={true} onChange={handleInputChange2}/>
          <label htmlFor="PassInput" className={inputValue2 !== '' ? "ativado" : "desativado"}>Senha</label>

        </div>

          <div className="btnLogin">

            <input type="submit" value="Log in" className="Login"></input>
                      
          </div>

          <div className="btnSignin">

            <input type="submit" value="Signin" className="Signin"></input>
          
          </div>

        </form>


        </div>


      </div>

      </>
  );
  
}

export default Login;
