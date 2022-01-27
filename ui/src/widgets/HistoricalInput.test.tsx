import { fireEvent, render, waitFor } from "@testing-library/react";
import { HistoricalInput } from ".";

const baseProps = {
  setAvailableCards: () => {},
};

let mockResponse: any = [];

describe("Historical Input", () => {
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

  it("should make a request to fetch based on a specific number combination and set cards", () => {
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

    const mockSetCards = jest.fn();
    const { getByTestId } = render(
      <HistoricalInput {...baseProps} setAvailableCards={mockSetCards} />
    );

    fireEvent.change(getByTestId("historical-input"), {
      target: { value: "111" },
    });

    fireEvent.click(getByTestId("historical-button"));

    waitFor(() => {
      expect(global.fetch).toBeCalled();
      expect(mockSetCards).toBeCalledWith(mockResponse.cards);
    });
  });
});
