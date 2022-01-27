import { fireEvent } from "@testing-library/react";

export const fireInputEvent = (input: HTMLElement, value: any) => {
  fireEvent.change(input, { target: { value } });
};
