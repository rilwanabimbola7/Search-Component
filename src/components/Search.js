//Main search component
import React, {useRef, useState} from "react";
import Scroll from "./Scroll";
import SearchList from "./SearchList";
import icon from '../image/world.png';
import {Button, Image, Form, Container, Navbar} from 'react-bootstrap'

function Search ({ items, loading, error }){
    //this the useState for the search field
    const [searchField, setSearchField]= useState("");
    const [searchText, setSearchText]= useState(null);
    const inputElement = useRef();

    const filteredNames = items.filter(
        data => {
            if (searchField ==""){
                return data
            }else if (data.name.toLowerCase().includes(searchField.toLowerCase())){
                return data
            }else if (data.subregion.toLowerCase().includes(searchField.toLowerCase())){
                return data
            }
            
        }
    );

    const handleText = (e) => {
        e.preventDefault();
        setSearchText(e.target.value)
    }
    
    const handleClick = () => {
        setSearchField("");
        // inputElement.current.focus();
        // const searchValue = inputElement.current.value;
        const searchValue = searchText;
        setSearchField(searchValue)      
    }


    const handleFilter = e => {
        setSearchField("");
        setSearchText(null)
        setSearchField(e.target.value);
    };


    function searchList(){
        return (
            <Scroll>
                <SearchList 
                filteredNames = {filteredNames}
                loading = {loading}
                error = {error}
                />
            </Scroll>
        );
    }

    return (
        <section>
            <div className = "header">
                <Navbar bg="light" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#home">
                        <Image src={icon} alt="logo" height = "50"/>
                        World Search
                        </Navbar.Brand>
                        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                            <Form.Select onChange = {handleFilter} aria-label="Filter Countries by Region">
                                <option value = ""> Filter by Region</option>
                                <option value="Africa">Africa</option>
                                <option value="America">America</option>
                                <option value="Asia">Asia</option>
                                <option value="Europe">Europe</option>
                                <option value="Oceania">Oceania</option>
                            </Form.Select>
                        </Navbar.Collapse>
                        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                            <Form className="d-flex">
                                <Form.Control
                                    // ref = {inputElement}
                                    type="search"
                                    placeholder="Search for country"
                                    className="me-2"
                                    aria-label="Search"  
                                    name="search"
                                    value={searchText}
                                    onChange={handleText}
                                />
                                <Button variant="outline-success" onClick={handleClick} disabled={!searchText}>Search</Button>
                            </Form>  
                        </Navbar.Collapse>
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                Rilwan Abimbola
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            
            {searchList()}
        </section>
    );
}
export default Search;
