import React, {useState} from 'react';
import './navgitaion.css';
import {Link, useNavigate} from "react-router-dom";
import SearchIcon from "../../assets/icons/search-icon";

function Navigation() {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  function submitHandler(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate(`/search?term=${term}`);
  }

  return (
    <header className="navigation">
      <div className="container">
        <div className="navigation__wrapper">
          <Link className="navigation__logo" title="Go to home page" to="/">Space X</Link>
          <form className="navigation__form" onSubmit={submitHandler}>
            <input
              type="search"
              placeholder="Search"
              required={true}
              value={term}
              onChange={e => setTerm(e.target.value)}
            />
            <button type="submit"><SearchIcon/></button>
          </form>
        </div>
      </div>
    </header>
  );
}

export default Navigation;