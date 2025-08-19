import styles from "./Pagination.module.css";
import arrowBack from "/icons/arrow-back-pgn.svg";
import arrowNext from "/icons/arrow-next-pgn.svg";
import { PAGES_PER_GROUP } from "../../model/config";
import type { PaginationProps } from "../../model/types";

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const currentGroup = Math.ceil(currentPage / PAGES_PER_GROUP);
  const startPage = (currentGroup - 1) * PAGES_PER_GROUP + 1;
  const endPage = Math.min(currentGroup * PAGES_PER_GROUP, totalPages);
  const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  const handleClickBack = () => onPageChange(currentPage - 1);
  const handleClickNext = () => onPageChange(currentPage + 1);
  const handleClickPage = (page: number) => onPageChange(page);
  const handlePrevGroup = () => onPageChange((currentGroup - 2) * PAGES_PER_GROUP + 1);
  const handleNextGroup = () => onPageChange(currentGroup * PAGES_PER_GROUP + 1);

  return (
    <div className={styles.container}>
      <button onClick={handleClickBack} disabled={currentPage === 1} className={styles.btnSetPage}>
        <img src={arrowBack} alt="arrow-back" />
      </button>
      {currentGroup > 1 && (
        <button onClick={handlePrevGroup} className={styles.bthPage}>
          ...
        </button>
      )}
      {pages.map(page => (
        <button
          key={page}
          onClick={() => handleClickPage(page)}
          disabled={page === currentPage}
          className={styles.bthPage}
        >
          {page}
        </button>
      ))}
      {currentGroup < Math.ceil(totalPages / PAGES_PER_GROUP) && (
        <button onClick={handleNextGroup} className={styles.bthPage}>
          ...
        </button>
      )}
      <button onClick={handleClickNext} disabled={currentPage === totalPages} className={styles.btnSetPage}>
        <img src={arrowNext} alt="arrow-next" />
      </button>
    </div>
  );
}

export default Pagination;
