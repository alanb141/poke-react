import { describe, it, expect, vi, beforeEach } from "vitest";
import React from 'react'
import "@testing-library/jest-dom";
import { render, screen, fireEvent, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Tile from "../components/Tile";
import { mockPokemons } from "../store/collection"
import App from "../App";

const localStorageMock = (() => {
  let store = {};
  return {
    getItem: vi.fn((key) => store[key] || null),
    setItem: vi.fn((key, value) => { store[key] = value.toString(); }),
    clear: vi.fn(() => { store = {}; }),
  };
})();

vi.stubGlobal('localStorage', localStorageMock);

describe("Tile Favorites Logic", () => {
  it("calls toggleFavourites when the star button is clicked", async () => {
    const toggleMock = vi.fn();
    const pokemon = mockPokemons[0];

    render(
      <MemoryRouter>
        <Tile
          img={pokemon.sprite}
          name={pokemon.name}
          id={pokemon.id}
          toggleFavourites={toggleMock}
          isFavorite={false}
        />
      </MemoryRouter>
    );

    const favButton = screen.getByRole("button", { name: /favorite/i });
    fireEvent.click(favButton);
    expect(toggleMock).toHaveBeenCalledTimes(1);
    expect(toggleMock).toHaveBeenCalledWith(expect.anything(), pokemon.name);
  });

  it("applies the 'active' class when isFavorite is true", () => {
    const pokemon = mockPokemons[0];

    render(
      <MemoryRouter>
        <Tile
          img={pokemon.sprite}
          name={pokemon.name}
          id={pokemon.id}
          isFavorite={true}
        />
      </MemoryRouter>
    );

    const favButton = screen.getByRole("button", { name: /favorite/i });
    expect(favButton).toHaveClass("active");
  });
});

describe("Global Favorites Integration", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
    global.ResizeObserver = vi.fn().mockImplementation((callback) => ({
      observe: vi.fn(() => {
        callback([{ contentRect: { width: 1200, height: 800 } }]);
      }),
      unobserve: vi.fn(),
      disconnect: vi.fn(),
    }));

    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(query => ({
        matches: false, 
        media: query,
        onchange: null,
        addListener: vi.fn(), 
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  });

  it("updates localStorage when a pokemon is starred", async () => {
    render(<App />);
    const favButtons = screen.getAllByRole("button", { name: /favorite/i });
    const targetStar = favButtons[0];
    fireEvent.click(targetStar);

    expect(localStorage.setItem).toHaveBeenCalledWith(
      "poke_favourites",
      expect.stringContaining("bulbasaur")
    );

    const savedData = JSON.parse(localStorage.getItem("poke_favourites"));
    expect(savedData).toContain("bulbasaur");
  });

  it("identifies the favorite star for a specific pokemon", () => {
    localStorage.setItem("poke_favourites", JSON.stringify(["squirtle"]));
    render(<App />);
    const squirtleCard = screen.getByRole("group", { name: /squirtle/i });
    const star = within(squirtleCard).getByRole('button', { name: /favorite/i });
    expect(star).toHaveClass("active");
  });
});