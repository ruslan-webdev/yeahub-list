import styles from "./Pagination.module.css";
import arrowLeft from "/icons/arrow-left-pgn.svg";
import arrowRight from "/icons/arrow-right-pgn.svg";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PAGES_PER_GROUP = 10;

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
      <button className={styles.btnSetPage} onClick={handleClickBack} disabled={currentPage === 1}>
        <img src={arrowLeft} alt="back" />
      </button>
      {currentGroup > 1 && (
        <button className={styles.btnPage} onClick={handlePrevGroup}>
          ...
        </button>
      )}
      {pages.map(page => (
        <button
          key={page}
          className={styles.btnPage}
          onClick={() => handleClickPage(page)}
          disabled={page === currentPage}
        >
          {page}
        </button>
      ))}
      {currentGroup < Math.ceil(totalPages / PAGES_PER_GROUP) && (
        <button onClick={handleNextGroup} className={styles.btnPage}>
          ...
        </button>
      )}
      <button className={styles.btnSetPage} onClick={handleClickNext} disabled={currentPage === totalPages}>
        <img src={arrowRight} alt="next" />
      </button>
    </div>
  );
}

export default Pagination;
