### Pagination

- paginationFirst

  - 이 부분은 처음 만든 페이지네이션

  ```.ts
  const chapter = [...Array(totalPage)].slice(pageChapter,pageChapter + showPageNum);
  ```

  - slice 를 사용하여 [] 에 숫자를 넣어준다.
    ex > pageChapter 가 처음에 0 으로 들어오고 showPageNum 은 10 이라고 가정하였을 때 0 부터 10까지 slice 를 하여 배열을 완성 시켜준다 .

  ```.ts
   chapter.map((_, i) => {
        const index = i + pageChapter;

        return (
          <div
            key={index}
            className={classNames("pagination-item", {
              active: curPageIndex === index,
            })}
            onClick={(): void => pageHandler(index)}
          >
            {index + 1}
          </div>
        );
      })
  ```

  - 위에서 만들어진 chapter:[] 의 형태는 [undefined * 10] 일 것이다.
  - 그 뒤 map (반복문) 을 돌려서 반복문의 index 를 순서대로 넣어준다.
  - 여기서는 forEach 는 어울리지 않고 map 이 맞다. > forEach 와 제일 큰 차이점인 새로운 배열을 반환 해주기 때문이다.

- paginationSecond

  - First 부분에서 Code를 대략적으로 줄인 방법이다.

- PaginationThird
  - 이 부분은 기존의 만든 코드에서 '>' 화살표를 눌렀을때 번호가 하나씩 넘어가게 되었다면, 여기 부분에서는 총 페이지가 20페이지가 있다고 가정했을 때 showPage는 10개 이므로 pagination 이 보여줘야 할 챕터가 2개가 되어진다. 이 때에 '>' 를 누르면 챕터 자체가 넘어가게 해주는 기능을 적용한 부분이다.
