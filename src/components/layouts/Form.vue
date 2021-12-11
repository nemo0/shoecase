<template>
  <div class="form">
    <div class="billing">
      <h3>Billing Address</h3>
      <form action="" method="post">
        <div class="d-flex">
          <div class="input-block">
            <input
              type="text"
              name="input-text"
              id="f-name"
              required
              spellcheck="false"
            />
            <span class="placeholder">First Name</span>
          </div>
          <span class="pad"></span>
          <div class="input-block">
            <input
              type="text"
              name="input-text"
              id="l-name"
              required
              spellcheck="false"
            />
            <span class="placeholder">Last Name</span>
          </div>
        </div>
        <div class="input-block">
          <input
            type="text"
            name="input-text"
            id="email"
            required
            spellcheck="false"
          />
          <span class="placeholder">E-mail</span>
        </div>
        <div class="input-block">
          <input
            type="text"
            name="input-text"
            id="street"
            required
            spellcheck="false"
          />
          <span class="placeholder">Street Address</span>
        </div>
        <div class="input-block">
          <input
            type="text"
            name="input-text"
            id="street-2"
            required
            spellcheck="false"
          />
        </div>
        <div class="d-flex">
          <div class="input-block">
            <input
              type="text"
              name="input-text"
              id="state"
              required
              spellcheck="false"
              list="states"
            />
            <span class="placeholder">State/Province</span>
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
              required
              spellcheck="false"
            />
            <span class="placeholder">City</span>
          </div>
        </div>
        <div class="d-flex">
          <div class="input-block">
            <input
              type="text"
              name="input-text"
              id="pin"
              required
              spellcheck="false"
            />
            <span class="placeholder">Pin</span>
          </div>
          <span class="pad"></span>
          <div class="input-block">
            <input
              type="text"
              name="input-text"
              id="phone"
              required
              spellcheck="false"
            />
            <span class="placeholder">Phone</span>
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
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
};
</script>