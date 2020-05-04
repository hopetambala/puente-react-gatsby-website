import React from "react"
import {
  Link,
} from "gatsby"
import { loadStripe } from "@stripe/stripe-js"
import Button from 'react-bootstrap/Button'

// Style Imports
import donateStyles from './donateForm.module.scss'


class DonateForm extends React.Component {

  handleCheckout = async event => {

    event.preventDefault()
    const stripe = await loadStripe("pk_live_v3RS8bgf9BoQG9jJwjOaAHgi")
    console.log(stripe)
    const { error } = await stripe.redirectToCheckout({
      successUrl: `http://localhost:8000/donate/`,
      cancelUrl: `http://localhost:8000/404/`,
    })
    if (error) {
      console.warn("Error:", error)
    }
  }

  render () {
    return (
      <div className={donateStyles.container}>
        <Button onClick={this.handleCheckout}>
          Donate Form
        </Button>
      </div>
    )
  }
}
export default DonateForm