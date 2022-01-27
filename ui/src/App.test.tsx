import { act, render, waitForElementToBeRemoved } from "@testing-library/react";
import App from "./App";

let submitReference: any;
let setAvailableCardsReference: any;

jest.mock("./widgets", () => ({
  ...jest.requireActual("./widgets"),
  FormInput: (props) => {
    submitReference = props.onSubmit;

    return <div {...props}>FormInput</div>;
  },
  HistoricalInput: (props) => {
    setAvailableCardsReference = props.setAvailableCards;
    return <div {...props}>HistoricalInput</div>;
  },
}));

jest.mock("react-transition-group", () => ({
  ...jest.requireActual("react-transition-group"),
  CSSTransition: ({ children }) => <>{children}</>,
  SwitchTransition: ({ children }) => <>{children}</>,
}));

let mockResponse: any = [];

describe("App", () => {
  let originalFetch: any;

  beforeEach(() => {
    originalFetch = global.fetch;
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      })
    ) as jest.Mock;
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });

  describe("submiting form", () => {
    it("should make a request to the back end with the form data and show new component", async () => {
      mockResponse = {
        cards: [
          {
            id: "test",
            name: "test-card",
            apr: 17,
            balanceDuration: 0,
            purchaseDuration: 0,
            credit: 5000,
          },
        ],
      };

      const { getByTestId } = render(<App />);

      act(async () => {
        await submitReference();
      });

      waitForElementToBeRemoved(getByTestId("form-input")).then(() => {
        expect(global.fetch).toBeCalled();
        expect(getByTestId("card-selector")).toBeInTheDocument();
      });
    });
  });
});
