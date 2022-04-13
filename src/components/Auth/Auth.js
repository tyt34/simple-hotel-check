import './Auth.css'
import React, { useState, useEffect } from 'react'
import { useNavigate} from 'react-router-dom'
import {
  trueEasyPass,
  trueEmail
} from '../../utils/consts.js'

function Auth() {
  const navigate = useNavigate()
  const [button, setButton] = React.useState(false)
  const [identifier, setIdentifier] = useState('') // логин
  const [pass, setPass] = useState('')
  const [errIdentifier, setErrIdentifier] = useState('')
  const [errPass, setErrPass] = useState('')

  useEffect( () => {
    if ( (identifier !== '') && (pass !== '') ) {
      if (!trueEmail.test(identifier)) {
        setErrIdentifier('Введите электронную почту. Например: a@mail.ru')
      } else if (trueEmail.test(identifier)) {
        setErrIdentifier('')
      }
      if (!trueEasyPass.test(pass)) {
        setErrPass('Только латинские буквы и цифры. Min 8 символов.')
      } else if (trueEasyPass.test(pass)) {
        setErrPass('')
      }
      if (errIdentifier === '' && errPass === '') {
        setButton(true)
      } else {
        setButton(false)
      }
    } else {
      setButton(false)
    }
  }, [identifier, pass])

  useEffect( () => {
    if (errIdentifier === '' && errPass === '') {
      setButton(true)
    } else {
      setButton(false)
    }
  }, [errIdentifier, errPass])

  function handleChangeIdentifier(e) {
    setIdentifier(e.target.value)
  }

  function handleChangePass(e) {
    setPass(e.target.value)
  }

  function handleClickEnter(e) {
    e.preventDefault()
    navigate('/')
  }

  return (
    <>
      <section className="auth">
        <section className="auth__blur">
          <form className="auth__panel">
            <h1 className="auth__title">
              Simple Hotel Check
            </h1>

            <h2 className="auth__name-input">
              Логин
            </h2>

            <input
              id={`inputIdentifier`}
              className="auth__input"
              name="identifier"
              minLength="3"
              maxLength="30"
              value={identifier}
              onChange={handleChangeIdentifier}

              required
            />

            <span
              className="auth__error"
            >
              {errIdentifier}
            </span>

            <h2 className="auth__name-input">
              Пароль
            </h2>

            <input
              id={`inputPass`}
              type="password"
              className="auth__input"
              name="pass"
              minLength="8"
              maxLength="16"
              value={pass}
              onChange={handleChangePass}

              required
            />

            <span
              className="auth__error"
            >
              {errPass}
            </span>

            <button
              className={ button ? 'auth__enter' : 'auth__enter auth__enter-disabled'}
              onClick={handleClickEnter}
              disabled={ button ? '' : 'disabled'}
            >
              <p className="auth__button-title">
                Войти
              </p>
            </button>

          </form>
        </section>
      </section>
    </>
  )
}

export default Auth
