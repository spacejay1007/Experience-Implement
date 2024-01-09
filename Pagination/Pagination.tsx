import React, { useState } from "react";
// import classNames from "classnames";
import "./Pagination.scss";

interface Props {
  format: { startRow: number; pageRow: number };
  totalPage: number;
  onChange: (startRow: number) => void;
  showPage?: number; // 페이지 보여주는 갯수
}

const PaginationFirst: React.FC<Props> = ({
  format,
  totalPage,
  onChange,
  showPage,
}) => {
  const { startRow, pageRow } = format;
  const curPageIndex = startRow / pageRow;
  const showPageNum = showPage ?? 5; // 페이지네이션 넘버를 나타내기
  const pageChapter = Math.floor(curPageIndex / showPageNum) * showPageNum;

  const pageHandler = (index: number): void => onChange(index * pageRow);

  const disabledArrowButton = {
    prevBtn: curPageIndex === 0, // 앞의 번호가 없을 때 current 가 0 번일때
    nextBtn: curPageIndex + 1 === totalPage, // > // 뒤의 번호가 없을 때
  };
  // <<
  const leftChapterStartHandler = (): void => {
    if (disabledArrowButton.prevBtn) return;
    if (curPageIndex !== 0) onChange(0);
  };

  // <
  const leftChapterHandler = (): void => {
    if (disabledArrowButton.prevBtn) return;
    if (curPageIndex > 0) onChange((curPageIndex - 1) * pageRow);
  };

  // >
  const rightChapterHandler = (): void => {
    if (disabledArrowButton.nextBtn) return;
    if (totalPage !== 1 && curPageIndex + 1 !== totalPage) {
      onChange(startRow + pageRow);
    }
  };
  // >>
  const rightChapterEndHandler = (): void => {
    if (disabledArrowButton.nextBtn) return;
    if (curPageIndex === totalPage - 1) return;
    onChange((totalPage - 1) * pageRow);
  };

  const chapter = [...Array(totalPage)].slice(
    pageChapter,
    pageChapter + showPageNum
  );

  /** 번호 페이지 - 김재용 - */
  const items =
    chapter.length === 0 ? (
      <div className={classNames("pagination-item active")}>1</div>
    ) : (
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
    );

  return (
    <div className="ssr__pagination">
      <div className="ssr__pagination__buttons">
        <div
          className={classNames("ssr__left__arrow__start", {
            disabled: disabledArrowButton.prevBtn,
          })}
          onClick={leftChapterStartHandler}
        >
          <i />
        </div>
        <div
          className={classNames("ssr__left__arrow", {
            disabled: disabledArrowButton.prevBtn,
          })}
          onClick={leftChapterHandler}
        >
          <i />
        </div>
        <div className="ssr__page__items">{items}</div>

        <div
          className={classNames("ssr__right__arrow", {
            disabled: disabledArrowButton.nextBtn,
          })}
          onClick={rightChapterHandler}
        >
          <i />
        </div>
        <div
          className={classNames("ssr__right__arrow-end", {
            disabled: disabledArrowButton.nextBtn,
          })}
          onClick={rightChapterEndHandler}
        >
          <i />
        </div>
      </div>
    </div>
  );
};

const PaginationSecond: React.FC<Props> = ({
  format,
  totalPage,
  onChange,
  showPage,
}) => {
  const { startRow, pageRow } = format;
  const curPageIndex = startRow / pageRow;
  const showPageNum = showPage ?? 5; // 페이지네이션 넘버를 나타내기
  const pageChapter = Math.floor(curPageIndex / showPageNum) * showPageNum;

  const pageHandler = (index: number): void => onChange(index * pageRow);

  const disabledArrowButton = {
    prevBtn: curPageIndex === 0, // 앞의 번호가 없을 때 current 가 0 번일때
    nextBtn: curPageIndex + 1 === totalPage, // > // 뒤의 번호가 없을 때
  };

  const chapter = [...Array(totalPage)].slice(
    pageChapter,
    pageChapter + showPageNum
  );

  /** 번호 페이지 - 김재용 - */
  // const items =
  //   chapter.length === 0 ? (
  //     <div className={classNames("pagination-item active")}>1</div>
  //   ) : (
  //     chapter.map((_, i) => {
  //       const index = i + pageChapter;

  //       return (
  //         <div
  //           key={index}
  //           className={classNames("pagination-item", {
  //             active: curPageIndex === index,
  //           })}
  //           onClick={(): void => pageHandler(index)}
  //         >
  //           {index + 1}
  //         </div>
  //       );
  //     })
  //   );
  /** item 다른 버젼 - 김재용 - */
  const getPageNumbersToShow = (
    curPageIndex: number,
    totalPage: number,
    showPageNum: number
  ) => {
    let start = Math.max(curPageIndex - Math.floor(showPageNum / 2), 0);
    let end = start + showPageNum;

    if (end > totalPage) {
      end = totalPage;
      start = Math.max(end - showPageNum, 0);
    }

    return Array.from({ length: end - start }, (_, i) => start + i);
  };

  const paginationItems = getPageNumbersToShow(
    curPageIndex,
    totalPage,
    showPageNum
  ).map((index) => (
    <div
      key={index}
      className={classNames("pagination-item", {
        active: curPageIndex === index,
      })}
      onClick={() => pageHandler(index)}
    >
      {index + 1}
    </div>
  ));

  const pageChapterStart = Math.floor(curPageIndex / showPageNum) * showPageNum;
  const createPageHandler = (pageIndex: number) => () =>
    onChange(pageIndex * pageRow);
  const isPrevDisabled = curPageIndex === 0;
  const isNextDisabled = curPageIndex + 1 === totalPage;

  const renderPageNumbers = () => {
    if (totalPage === 0) {
      return (
        <div
          className={classNames("pagination-item active")}
          // onClick={createPageHandler(pageIndex)}
        >
          1
        </div>
      );
    }
    return Array.from(
      { length: Math.min(showPageNum, totalPage) },
      (_, idx) => {
        const pageIndex = idx + pageChapterStart;
        console.log(idx, pageIndex);

        return (
          <div
            key={pageIndex}
            className={classNames("pagination-item", {
              active: curPageIndex === pageIndex,
            })}
            onClick={createPageHandler(pageIndex)}
          >
            {pageIndex + 1}
          </div>
        );
      }
    );
  };

  return (
    <div className="ssr__pagination">
      <div className="ssr__pagination__buttons">
        <div
          className={classNames("ssr__left__arrow__start", {
            disabled: disabledArrowButton.prevBtn,
          })}
          // onClick={leftChapterStartHandler}
          onClick={createPageHandler(0)}
        >
          <i />
        </div>
        <div
          className={classNames("ssr__left__arrow", {
            disabled: disabledArrowButton.prevBtn,
          })}
          // onClick={leftChapterHandler}
          onClick={createPageHandler(Math.max(curPageIndex - 1, 0))}
        >
          <i />
        </div>
        <div className="ssr__page__items">{items}</div>
        {/* <div className="ssr__page__items">{paginationItems}</div> */}
        <div className="ssr__page__items">{renderPageNumbers()}</div>

        <div
          className={classNames("ssr__right__arrow", {
            disabled: disabledArrowButton.nextBtn,
          })}
          // onClick={rightChapterHandler}
          onClick={createPageHandler(Math.min(curPageIndex + 1, totalPage - 1))}
        >
          <i />
        </div>
        <div
          className={classNames("ssr__right__arrow-end", {
            disabled: disabledArrowButton.nextBtn,
          })}
          // onClick={rightChapterEndHandler}
          onClick={createPageHandler(totalPage - 1)}
        >
          <i />
        </div>
      </div>
    </div>
  );
};

export const PaginationThird: React.FC<Props> = ({
  format,
  totalPage,
  onChange,
  showPage,
}) => {
  const { startRow, pageRow } = format;
  const curPageIndex = startRow / pageRow;
  const showPageNum = showPage ?? 5; // 페이지네이션 넘버를 나타내기
  const pageChapter = Math.floor(curPageIndex / showPageNum) * showPageNum;

  const pageHandler = (index: number): void => onChange(index * pageRow);

  const disabledArrowButton = {
    prevBtn: curPageIndex === 0, // 앞의 번호가 없을 때 current 가 0 번일때
    nextBtn: curPageIndex + 1 === totalPage, // > // 뒤의 번호가 없을 때
  };
  // <<
  const leftChapterStartHandler = (): void => {
    if (disabledArrowButton.prevBtn) return;
    if (curPageIndex !== 0) onChange(0);
  };

  // <
  const leftChapterHandler = (): void => {
    if (disabledArrowButton.prevBtn) return;
    // if (curPageIndex > 0) onChange((curPageIndex - 1) * pageRow);
    const prevPageSetStart = Math.max(
      0,
      (Math.floor(curPageIndex / showPageNum) - 1) * showPageNum
    );
    onChange(prevPageSetStart * pageRow);
  };

  // >
  const rightChapterHandler = (): void => {
    if (disabledArrowButton.nextBtn) return;
    // if (totalPage !== 1 && curPageIndex + 1 !== totalPage) {
    //   onChange(startRow + pageRow);
    // }
    const nextPageSetStart = Math.min(
      (Math.floor(curPageIndex / showPageNum) + 1) * showPageNum,
      totalPage - 1
    );
    onChange(nextPageSetStart * pageRow);
  };
  // >>
  const rightChapterEndHandler = (): void => {
    if (disabledArrowButton.nextBtn) return;
    if (curPageIndex === totalPage - 1) return;
    onChange((totalPage - 1) * pageRow);
  };

  const chapter = [...Array(totalPage)].slice(
    pageChapter,
    pageChapter + showPageNum
  );

  /** 번호 페이지 - 김재용 - */
  const items =
    chapter.length === 0 ? (
      <div className={classNames("pagination-item active")}>1</div>
    ) : (
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
    );

  return (
    <div className="ssr__pagination">
      <div className="ssr__pagination__buttons">
        <div
          className={classNames("ssr__left__arrow__start", {
            disabled: disabledArrowButton.prevBtn,
          })}
          onClick={leftChapterStartHandler}
        >
          <i />
        </div>
        <div
          className={classNames("ssr__left__arrow", {
            disabled: disabledArrowButton.prevBtn,
          })}
          onClick={leftChapterHandler}
        >
          <i />
        </div>
        <div className="ssr__page__items">{items}</div>
        <div
          className={classNames("ssr__right__arrow", {
            disabled: disabledArrowButton.nextBtn,
          })}
          onClick={rightChapterHandler}
        >
          <i />
        </div>
        <div
          className={classNames("ssr__right__arrow-end", {
            disabled: disabledArrowButton.nextBtn,
          })}
          onClick={rightChapterEndHandler}
        >
          <i />
        </div>
      </div>
    </div>
  );
};
