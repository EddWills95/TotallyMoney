import { fireEvent, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FormInput } from ".";

const baseProps = {
  onSubmit: () => {},
};

const fireInputEvent = (input: HTMLElement, value: any) => {
  fireEvent.change(input, { target: { value } });
};

describe("FormInput", () => {
  describe("Rendering correctly", () => {
    it("should render all the fields", () => {
      const { getByTestId } = render(<FormInput {...baseProps} />);

      expect(getByTestId("title-input")).toBeInTheDocument();
      expect(getByTestId("firstname-input")).toBeInTheDocument();
      expect(getByTestId("lastname-input")).toBeInTheDocument();
      expect(getByTestId("datepicker-input")).toBeInTheDocument();
      expect(getByTestId("income-input")).toBeInTheDocument();
      expect(getByTestId("employment-input")).toBeInTheDocument();
      expect(getByTestId("houseNumber-input")).toBeInTheDocument();
      expect(getByTestId("postcode-input")).toBeInTheDocument();
    });

    it("should render a submit button", () => {
      const { getByTestId } = render(<FormInput {...baseProps} />);

      expect(getByTestId("form-button")).toBeInTheDocument();
    });
  });

  describe("Interaction", () => {
    it("should be able to fill in the form and fire the submit prop", async () => {
      const submitMock = jest.fn();

      const { getByTestId } = render(<FormInput onSubmit={submitMock} />);

      fireInputEvent(getByTestId("title-input"), "Mr");
      fireInputEvent(getByTestId("firstname-input"), "Bob");
      fireInputEvent(getByTestId("lastname-input"), "Geldoff");
      // Massive Gotcha. Event must be in ISO format rather than how it is seen by user
      fireInputEvent(getByTestId("datepicker-input"), "1970-03-22");
      fireInputEvent(getByTestId("income-input"), 30000);
      fireInputEvent(getByTestId("employment-input"), "Full time");
      fireInputEvent(getByTestId("houseNumber-input"), 456);
      fireInputEvent(getByTestId("postcode-input"), "E4 7GH");

      fireEvent.click(getByTestId("form-button"));

      await waitFor(() => {
        expect(submitMock).toHaveBeenCalled();
      });
    });
  });
});
