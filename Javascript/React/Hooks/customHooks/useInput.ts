// useState 와 useCallback 을 사용하여 처리를 할 수 있는 customHooks

// 어떨 때 사용해야할까? 리액트가 있다고 가정해보자
// export const defaultExample = () => {
//   const [id, setId] = useState("");

//   const onChangeId = (e: Event) => {
//     setId(e.target.value);
//   };
//   return (
//     <div>
//       <label htmlFor="user-id">아이디</label>
//       <input onChange={onChangeId} />
//     </div>
//   );
// };

// 위의 예시는 한개이니깐 가능하지만 여러개라면?

export const useInput = (init = null) => {
  const [value, setValue] = useState(init);

  const handler = useCallback((e: Event) => {
    setValue(e.target.value);
  });

  return [value, handler];
};

export const newExample = () => {
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");

  return (
    <>
      <div>
        <label htmlFor="user-id">아이디</label>
        <input onChange={onChangeId} />
      </div>
      <div>
        <label htmlFor="user-pass">비밀번호</label>
        <input onChange={onChangePassword} />
      </div>
    </>
  );
};
