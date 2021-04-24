import { Component } from "react";

export default class CheckoutForm extends Component {
    state = { firstName: "", lastName: "", email: "", creditCard: "" , zip: ""};

    handleSubmit = (e) => {
        e.preventDefault();
        const { total } = this.props;
        const { firstName, lastName, email, creditCard, zip } = this.state;
        if (!firstName || !lastName || !email) {
          debugger;
          window.alert(`Input is not valid`);
        } else if (creditCard.length !== 16) {
          window.alert(`Credit card number is not valid`);
        } else if (zip.length !== 5) {
          window.alert(`Input is not valid.
          Zip code is not valid`);
        } else {
          window.alert(`Yay! Purchase complete! You will be charged $${total.toFixed(2)}.`);
        }
      };


    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
      };


    render() {
    const { firstName, lastName, email, creditCard, zip } = this.state;
    console.log(this.state);

    return (
      <form onSubmit={this.handleSubmit} >
        <h2>Checkout</h2>
        <label>
          First Name
          <input
            name="firstName"
            onChange={this.handleChange}
            value={firstName}
          />
        </label>{" "}
        <br></br>
        <label>
          Last Name
          <input
            name="lastName"
            onChange={this.handleChange}
            value={lastName}
          />
        </label>{" "}
        <br></br>
        <label>
          Email
          <input name="email" onChange={this.handleChange} value={email} />
        </label>{" "}
        <br></br>
        <label>
          Credit Card
          <input
            name="creditCard"
            onChange={this.handleChange}
            value={creditCard}
          />
        </label>{" "}
        <br></br>
        <label>
          Zip Code
          <input name="zip" onChange={this.handleChange} value={zip} />
        </label>{" "}
        <br></br>
        <button>Buy Now</button>
      </form>
    );
  }
}
