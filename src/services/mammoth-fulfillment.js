import { FulfillmentService } from "medusa-interfaces";

class ManualFulfillmentService extends FulfillmentService {
  static identifier = "manual";

  constructor() {
    super();
  }

  getFulfillmentOptions() {
    return [
      {
        id: "manual-fulfillment",
      },
      {
        id: "manual-fulfillment-return",
        is_return: true,
      },
    ];
  }

  validateFulfillmentData(_, data, cart) {
    return data;
  }

  validateOption(data) {
    return true;
  }

  canCalculate() {
    console.warn("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.warn("Running canCalculate");
    console.warn("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    return true;
  }

  calculatePrice() {
    console.warn("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.warn("Running calculatePrice");
    console.warn("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    throw Error("Mammoth Fulfillment service cannot calculatePrice");
  }

  createOrder() {
    // No data is being sent anywhere
    return Promise.resolve({});
  }

  createReturn() {
    // No data is being sent anywhere
    return Promise.resolve({});
  }

  createFulfillment() {
    // No data is being sent anywhere
    return Promise.resolve({});
  }

  cancelFulfillment() {
    return Promise.resolve({});
  }
}

export default ManualFulfillmentService;
