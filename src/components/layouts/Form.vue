<template>
  <form action="" id="form" @submit.prevent="submitForm">
    <div class="form f-start">
      <div class="bill-container">
        <div class="billing">
          <h2>Billing Address</h2>
          <div class="d-flex">
            <div class="input-block">
              <input
                type="text"
                name="input-text"
                id="f-name"
                spellcheck="false"
                v-model="firstname"
              />
              <span class="placeholder">First Name</span>
              <span v-if="v$.firstname.$error" class="text-danger"
                >First Name is required!</span
              >
            </div>
            <span class="pad"></span>
            <div class="input-block">
              <input
                type="text"
                name="input-text"
                id="l-name"
                spellcheck="false"
                v-model="lastname"
              />
              <span class="placeholder">Last Name</span>
              <span
                v-if="v$.lastname.$error && v$.lastname.$dirty"
                class="text-danger"
                >Last Name is required!</span
              >
            </div>
          </div>
          <div class="input-block">
            <input
              type="email"
              name="input-text"
              id="email"
              spellcheck="false"
              v-model="email"
            />
            <span class="placeholder">E-mail</span>
            <span
              v-if="(v$.email.$error || !v$.email.email) && v$.email.$dirty"
              class="text-danger"
              >Valid Email is required!</span
            >
          </div>
          <div class="input-block">
            <input
              type="text"
              name="input-text"
              id="street"
              spellcheck="false"
              v-model="street"
            />
            <span class="placeholder">Street Address</span>
            <span
              v-if="v$.street.$error && v$.street.$dirty"
              class="text-danger"
              >Street Address is required!</span
            >
          </div>
          <div class="input-block">
            <input
              type="text"
              name="input-text"
              id="street-2"
              spellcheck="false"
            />
          </div>
          <div class="d-flex">
            <div class="input-block">
              <input
                type="text"
                name="input-text"
                id="state"
                spellcheck="false"
                list="states"
                v-model="state"
              />
              <span class="placeholder">State/Province</span>
              <span
                v-if="v$.state.$error && v$.state.$dirty"
                class="text-danger"
                >State/Province is required!</span
              >
              <datalist id="states">
                <option>California</option>
                <option>Alabama</option>
                <option>Arizona</option>
                <option>Kentucky</option>
              </datalist>
            </div>
            <span class="pad"></span>
            <div class="input-block">
              <input
                type="text"
                name="input-text"
                id="city"
                spellcheck="false"
                v-model="city"
              />
              <span class="placeholder">City</span>
              <span v-if="v$.city.$error && v$.city.$dirty" class="text-danger"
                >City is required!</span
              >
            </div>
          </div>
          <div class="d-flex">
            <div class="input-block">
              <input
                type="number"
                name="input-text"
                id="pin"
                spellcheck="false"
                v-model="pin"
              />
              <span class="placeholder">Pin</span>
              <span v-if="v$.pin.$error && v$.pin.$dirty" class="text-danger"
                >Pin is required!</span
              >
            </div>
            <span class="pad"></span>
            <div class="input-block">
              <input
                type="number"
                name="input-text"
                id="phone"
                spellcheck="false"
                v-model="phone"
              />
              <span class="placeholder">Phone</span>
              <span
                v-if="v$.phone.$error && v$.phone.$dirty"
                class="text-danger"
                >Phone is required!</span
              >
            </div>
          </div>
          <div class="checkbox">
            <input type="checkbox" id="bill-ship" name="bill-ship" checked />
            <label for="bill-ship"
              >My billing and shipping address are the same</label
            >
          </div>
          <div class="checkbox">
            <input type="checkbox" id="account" name="account" />
            <label for="account">Create an account for later use</label>
          </div>
        </div>
        <!-- Payment -->
        <div class="payment-container">
          <div class="payment">
            <h2>Payment Method</h2>
            <div class="paypal">
              <input type="radio" name="paypal" id="paypal" />
              <h4>Paypal</h4>
              <span class="paypal-placeholder"
                >You will be redirected to the PayPal website after submitting
                your order</span
              >
              <img
                src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg"
                border="0"
                alt="PayPal Logo"
              />
            </div>
            <div class="card">
              <div class="card-option">
                <div class="pay-with-card">
                  <input type="radio" name="card" id="card" />
                  <h4>Pay with Credit Card</h4>
                </div>
                <div class="card-photos">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"
                    border="0"
                    alt="PayPal Logo"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png"
                    border="0"
                    alt="PayPal Logo"
                  />
                  <img
                    src="https://w7.pngwing.com/pngs/547/375/png-transparent-discover-card-discover-financial-services-credit-card-bank-finance-credit-card-text-orange-payment.png"
                    border="0"
                    alt="PayPal Logo"
                  />
                  <img
                    src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/rupay-logo.png"
                    border="0"
                    alt="PayPal Logo"
                  />
                </div>
              </div>
              <div class="d-flex">
                <div class="input-block">
                  <input
                    type="number"
                    name="card-number"
                    id="card-number"
                    spellcheck="false"
                  />
                  <span class="placeholder">Card Number</span>
                </div>
                <span class="pad"></span>
                <div class="input-block">
                  <input
                    type="month"
                    name="month"
                    id="month"
                    spellcheck="false"
                  />
                  <span class="placeholder">Expiration Date</span>
                </div>
              </div>
              <div class="d-flex-cvv">
                <div class="input-block">
                  <input
                    type="password"
                    name="cvv"
                    id="cvv"
                    spellcheck="false"
                  />
                  <span class="placeholder">CVV</span>
                </div>
                <a href="#">What is this?</a>
              </div>
              <div class="secure">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#3592fc"
                    d="M17 9.761v-4.761c0-2.761-2.238-5-5-5-2.763 0-5 2.239-5 5v4.761c-1.827 1.466-3 3.714-3 6.239 0 4.418 3.582 8 8 8s8-3.582 8-8c0-2.525-1.173-4.773-3-6.239zm-8-4.761c0-1.654 1.346-3 3-3s3 1.346 3 3v3.587c-.927-.376-1.938-.587-3-.587s-2.073.211-3 .587v-3.587zm4 11.723v2.277h-2v-2.277c-.596-.347-1-.984-1-1.723 0-1.104.896-2 2-2s2 .896 2 2c0 .738-.404 1.376-1 1.723z"
                  />
                </svg>
                <p>
                  We provide your payment information using encryption to
                  provide bank-level security
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Amount -->
      <div class="payment-amount">
        <h2>Billing Summary</h2>
        <div class="amounts">
          <p>Subtotal</p>
          <p>$3720,27</p>
        </div>
        <div class="amounts">
          <p>Discount</p>
          <p>-$749.99</p>
        </div>
        <div class="amounts">
          <p>
            Warranty(Platinum) <br /><span class="remove"
              ><a href="#">Remove</a></span
            >
          </p>
          <p>$259.99</p>
        </div>
        <div class="amounts">
          <p>Shipping</p>
          <p>$0.00</p>
        </div>
        <div class="amounts">
          <p>Tax</p>
          <p>$228.72</p>
        </div>
        <hr />
        <div class="amounts">
          <h3>Grand Total</h3>
          <p>$3,439.00</p>
        </div>
        <div class="input-block">
          <input
            type="text"
            name="input-text"
            id="comment"
            spellcheck="false"
          />
          <span class="placeholder">Order Comment</span>
        </div>
        <div class="checkbox">
          <input type="checkbox" id="toc" name="toc" checked />
          <label for="toc"
            >Please check to acknowledge our
            <a href="#">Privacy & Terms Policy</a></label
          >
        </div>

        <button class="btn btn-primary" type="submit">Pay $3,439.00</button>
        <img
          src="https://www.kindpng.com/picc/m/26-269399_norton-secured-logo-hd-png-download.png"
          alt="Norton Secure"
          class="norton"
        />
      </div>
    </div>
  </form>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

import axios from "axios";

export default {
  name: "Form",
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      street: "",
      state: "",
      city: "",
      pin: "",
      phone: "",
    };
  },

  validations() {
    return {
      firstname: { required },
      lastname: { required },
      email: { required, email },
      street: { required },
      state: { required },
      city: { required },
      pin: { required },
      phone: { required },
    };
  },
  methods: {
    async submitForm() {
      const result = await this.v$.$validate();
      console.log(this.v$.firstname.$dirty);
      if (result) {
        console.log("Form submitted!");
        const formData = {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          street: this.street,
          state: this.state,
          city: this.city,
          pin: this.pin,
          phone: this.phone,
        };
        const response = await axios.post(
          "https://reqres.in/api/users",
          formData
        );
        console.log(response);
      } else {
        console.log("Form not submitted!", result);
      }
    },
  },
};
</script>