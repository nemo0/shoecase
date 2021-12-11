<template>
  <div class="payment-container">
    <div class="payment">
      <h3>Payment Method</h3>
      <div class="paypal">
        <input type="radio" name="paypal" id="paypal" />
        <h4>Paypal</h4>
        <span class="paypal-placeholder"
          >You will be redirected to the PayPal website after submitting your
          order</span
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
            <input type="radio" name="paypal" id="paypal" />
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
              required
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
              required
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
              required
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
            We provide your payment information using encryption to provide
            bank-level security
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Payment",
};
</script>