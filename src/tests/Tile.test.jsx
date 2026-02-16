import { describe, it, expect, vi, beforeEach } from "vitest";
import React from 'react'
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Tile from "../components/Tile";
import { mockPokemons } from "../store/collection"

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    Link: ({ children, to }) => <a href={to}>{children}</a>,
  };
});

describe("Tile Component", () => {
  beforeEach(() => {
    // Mocking the fetch requests to return the mocked data for each Pokémon
    global.fetch = vi.fn().mockImplementation((url) => {
      // Extract the Pokémon id from the URL (assuming the URL contains the Pokémon ID)
      const match = url.match(/pokemon\/(\d+)/);
      if (match) {
        const pokemonId = parseInt(match[1], 10);  // Extracted Pokémon id from the URL
        // Return the corresponding mocked Pokémon
        return Promise.resolve({
          json: vi.fn().mockResolvedValue(mockPokemons[pokemonId - 1]),  // Adjust to zero-based index
        });
      }
      // Default fallback if URL doesn't match expected format
      return Promise.resolve({ json: vi.fn().mockResolvedValue({}) });
    });
  });

  it("renders multiple Pokémon tiles with the correct name and image", async () => {
    render(
      <MemoryRouter>
        {mockPokemons.map((pokemon) => (
          <Tile key={pokemon.id} img={pokemon.sprite} name={pokemon.name} id={pokemon.id} />
        ))}
      </MemoryRouter>
    );

    // Check if all Pokémon names are in the document
    mockPokemons.forEach((pokemon) => {
      expect(screen.getByText(new RegExp(pokemon.name, 'i'))).toBeInTheDocument();
    });

    // Check if all images have correct attributes
    mockPokemons.forEach((pokemon) => {
      const img = screen.getByRole("img", { name: new RegExp(pokemon.name, 'i') });
      expect(img).toHaveAttribute("src", pokemon.sprite);
      expect(img).toHaveAttribute("alt", pokemon.name);
    });
  });

  it("renders a Link with the correct href attribute", async () => {
    render(
      <MemoryRouter>
        {mockPokemons.map((pokemon, index) => (
          <Tile key={index} img={pokemon.sprite} name={pokemon.name} id={index} />
        ))}
      </MemoryRouter>
    );

    // Check that the Link has the correct href for each Pokémon
    mockPokemons.forEach((pokemon, index) => {
      const link = screen.getByRole("link", { name: new RegExp(pokemon.name, 'i') });
      expect(link).toHaveAttribute("href", `/${pokemon.name.toLowerCase()}-${index}`);
    });
  });

  it("navigates to the correct page when a tile is clicked", async () => {
    render(
      <MemoryRouter>
        {mockPokemons.map((pokemon, index) => (
          <Tile key={index} img={pokemon.sprite} name={pokemon.name} id={index} />
        ))}
      </MemoryRouter>
    );

    // Simulate a click on each tile and check if the page navigates to the correct URL
    mockPokemons.forEach((pokemon, index) => {
      const tile = screen.getByText(new RegExp(pokemon.name, 'i'));
      fireEvent.click(tile);

      // Check the link's href when clicked (since we're using MemoryRouter, it won't change the window.location.href)
      const link = screen.getByRole("link", { name: new RegExp(pokemon.name, 'i') });
      expect(link).toHaveAttribute("href", `/${pokemon.name.toLowerCase()}-${index}`);
    });
  });
});