import { render, screen } from "@testing-library/react";
import Test from "./Test";

const user = {
  name: "Mike",
  age: 30,
};
const user2 = {
  age: 30,
};

// 스냅샷
test("snapShot: name 있음", () => {
  const view = render(<Test user={user} />);
  expect(view).toMatchSnapshot();
});
test("snapShot: name 없음", () => {
  const view = render(<Test />);
  expect(view).toMatchSnapshot();
});

test("hello 라는 글자가 포함되는가?", () => {
  render(<Test user={user} />);
  const helloEl = screen.getByText(/hello/i); // 정규식으로 알아보는것
  expect(helloEl).toBeInTheDocument();
});
