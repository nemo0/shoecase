<template>
  <div class="payment-amount">
    <h3>Billing Summary</h3>
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
        id="pin"
        required
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
    <a href="#">
      <button class="btn btn-primary">Pay $3,439.00</button>
    </a>
    <img
      src="https://www.kindpng.com/picc/m/26-269399_norton-secured-logo-hd-png-download.png"
      alt="Norton Secure"
      class="norton"
    />
  </div>
</template>

<script>
export default {
  name: "Amount",
};
</script>