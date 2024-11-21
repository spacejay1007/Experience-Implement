import { render, screen } from "@testing-library/react";
import Timer from "./Timer";

test("초 표시", () => {
  // 시간은 계속 바뀌기 때문에 mock 을 사용해줘야한다.
  Date.now = jest.fn(() => 123456789);
  const view = render(<Timer />);
  expect(view).toMatchSnapshot();
});
