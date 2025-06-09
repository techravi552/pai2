// components/Pagination.jsx
const Pagination = ({ offset, setOffset }) => {
  return (
    <div className="pagination">
      <button
        onClick={() => setOffset(offset - 20)}
      >
        Previous
      </button>
      <button onClick={() => setOffset(offset + 20)}>
        Next
      </button>
    </div>
  )
}

export default Pagination
