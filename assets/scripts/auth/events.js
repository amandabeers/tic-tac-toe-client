'use strict'

const getFormFields = require('../../../lib/get-form-fields') // you can start with `./` or not if you are leaving the directory
const api = require('./api') // you need to include `./` if you are pathing to something in the same directory
const ui = require('./ui')

const onSignUp = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  api.signUp(formData)
    .then(() => {
      onSignIn(event)
      // api.signIn(formData)
    })
    // .then((res) => {
    //   console.log(res)
    //   ui.signUpSuccessful(res)
    // })
    .catch(ui.signUpFailure)
}

const onSignIn = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.signInSuccessful)
    .catch(ui.signInFailure)
}

const onDemoSignIn = () => {
  const formData = {
    credentials: {
      email: 'demo@demo.com',
      password: 'password'
    }
  }
  api.signIn(formData)
    .then(ui.demoSignInSuccessful)
    .catch(ui.demoSignInFailure)
}

const onSwitchSignIn = event => {
  ui.switchSignIn()
}

const onSwitchSignUp = event => {
  ui.switchSignUp()
}

const onChangePassword = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(ui.changePasswordSuccessful)
    .catch(ui.changePasswordFailure)
}

const onSignOut = event => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccessful)
    .catch(ui.signOutFailure)
}

const onPwBtn = event => {
  ui.pwBtn()
}

module.exports = {
  onSignUp,
  onSignIn,
  onDemoSignIn,
  onSwitchSignIn,
  onSwitchSignUp,
  onChangePassword,
  onSignOut,
  onPwBtn
}
