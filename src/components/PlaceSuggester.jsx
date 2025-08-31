import React, { useState } from "react";

// Dummy data for place suggestions
const PLACES = [
    "New York",
    "Los Angeles",
    "Chicago",
    "San Francisco",
    "Seattle",
    "Boston",
    "Miami",
    "Austin",
    "Denver",
    "Atlanta",
];

const PlaceSuggester = () => {
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);

        if (value.trim() === "") {
            setSuggestions([]);
            return;
        }

        const filtered = PLACES.filter((place) =>
            place.toLowerCase().includes(value.toLowerCase())
        );
        setSuggestions(filtered);
    };

    const handleSuggestionClick = (suggestion) => {
        setQuery(suggestion);
        setSuggestions([]);
    };

    return (
        <div style={{ maxWidth: 400, margin: "2rem auto", fontFamily: "sans-serif" }}>
            <h2>Place Suggester</h2>
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Type a city name..."
                style={{ width: "100%", padding: "8px", fontSize: "1rem" }}
            />
            {suggestions.length > 0 && (
                <ul
                    style={{
                        listStyle: "none",
                        padding: 0,
                        margin: "8px 0 0 0",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        background: "#fff",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                    }}
                >
                    {suggestions.map((suggestion) => (
                        <li
                            key={suggestion}
                            onClick={() => handleSuggestionClick(suggestion)}
                            style={{
                                padding: "8px",
                                cursor: "pointer",
                                borderBottom: "1px solid #eee",
                            }}
                        >
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PlaceSuggester;