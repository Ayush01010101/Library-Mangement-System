import Navbar from "../components/Base/Navbar.jsx";
import BookCard from "../components/Base/Bookcard.jsx";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatebook, getbooks, logout } from "../ApiManeger/Endpoint.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { book as bookfunx } from "../store/store.js";
import { FaFilter, FaSearch } from "react-icons/fa";

function Homepage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const role = useSelector((state) => state.Reducer.userdata);
  
    const [allCards, setAllCards] = useState([]);
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [limit, setLimit] = useState(10);
    const [searchQuery, setSearchQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");
  
    useEffect(() => {
      fetchBooks();
    }, [limit]);
  
    useEffect(() => {
      applyFilters();
    }, [searchQuery, statusFilter, sortOrder]);
  
    const fetchBooks = () => {
      setLoading(true);
      axios
        .get(`${getbooks}/${limit}`)
        .then((res) => {
          setAllCards(res.data.data);
          setCards(res.data.data);
          setLoading(false);
        })
        .catch((error) => {
          alert("Failed to get books. Please try again later.");
          setLoading(false);
        });
    };
  
    const applyFilters = () => {
      let filteredBooks = [...allCards];
  
      if (searchQuery) {
        filteredBooks = filteredBooks.filter((book) =>
          book.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
  
      if (statusFilter) {
        filteredBooks = filteredBooks.filter(
          (book) => book.status.toLowerCase() === statusFilter
        );
      }
  
      if (sortOrder === "asc") {
        filteredBooks.sort((a, b) => a.publishedYear - b.publishedYear);
      } else {
        filteredBooks.sort((a, b) => b.publishedYear - a.publishedYear);
      }
  
      setCards(filteredBooks);
    };
  
    const handleSearch = (e) => {
      setSearchQuery(e.target.value);
    };
  
    const handleFilter = (status) => {
      setStatusFilter(status);
    };
  
    const handleSortOrder = (order) => {
      setSortOrder(order);
    };
  
    return (
      <>
        <div className="container">
        
          <Navbar
            Isadmin={role.role === "admin"}
            handleaddbook={() => navigate("/addbook")}
            handlelogout={() => {
              const log = window.confirm("Are you sure?");
              if (log) {
                localStorage.clear();
                axios.post(logout, { withCredentials: true }).catch((error) => {
                  console.log("Some error occurred", error);
                });
                navigate("/login");
              }
            }}
            />
            
        </div>
  
        <div className="container p-4 overflow-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
              <input
                type="text"
                placeholder="Search books..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full md:w-64 p-2 border rounded-l-md"
              />
              <button className="bg-blue-500 text-white p-2 rounded-r-md">
                <FaSearch />
              </button>
            </div>
  
            <div className="flex items-center space-x-4">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-md"
                onClick={() => handleFilter("available")}
              >
                Available
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={() => handleFilter("borrowed")}
              >
                Borrowed
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded-md"
                onClick={() => handleFilter("")}
              >
                Reset Filter
              </button>
              <button
                className="bg-yellow-500 text-white px-4 py-2 rounded-md"
                onClick={() => handleSortOrder(sortOrder === "asc" ? "desc" : "asc")}
              >
                {sortOrder === "asc" ? "Sort Desc" : "Sort Asc"}
              </button>
            </div>
          </div>
  
          
  
          <div className="div border-2 flex flex-wrap justify-center items-center">
            {loading ? (
              <p>Please wait...</p>
            ) : cards.length > 0 ? (
              cards.map((book) => (
                <BookCard
                  key={book.id}
                  isAdmin={role.role === "admin"}
                  title={book.title}
                  author={book.author}
                  status={book.status}
                  publishedYear={book.publishedYear}
                  handleaction={() => {
                    dispatch(bookfunx(book));
                    navigate(`${updatebook}/${book.id}`);
                  }}
                />
              ))
            ) : (
              <h1 className="text-3xl font-bold text-center">No Books Found</h1>
            )}
          </div>
  
          <div className="button w-full flex justify-center items-center">
            <button
              onClick={() => setLimit(limit + 10)}
              className="mt-4 mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Show More
            </button>
          </div>
        </div>
      </>
    );
  }
  
  export default Homepage;
  
