import styled from "styled-components";
function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);

  return (
    <SytledPage>
      <nav className="nav">
        <button
          className="navBtn"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          &lt;
        </button>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <button
              className="navBtn"
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : null}
            >
              {i + 1}
            </button>
          ))}
        <button
          className="navBtn"
          onClick={() => setPage(page + 1)}
          disabled={page === numPages}
        >
          &gt;
        </button>
      </nav>
    </SytledPage>
  );
}

export default Pagination;

const SytledPage = styled.div`
  .nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    margin: 16px;
  }
  .navBtn {
    border: none;
    border-radius: 8px;
    padding: 8px;
    margin: 0;
    background: white;
    color: black;
    font-size: 1rem;
  }
  .navBtn:hover {
    background: rgb(var(--basic-blue));
    cursor: pointer;
    transform: translateY(-2px);
  }

  .navBtn:disabled {
    background: grey;
    cursor: revert;
    transform: revert;
  }
  [aria-current="page"] {
    background: rgb(var(--basic-blue));
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;
