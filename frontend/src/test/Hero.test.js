import React from 'react'
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom/extend-expect';
import Hero from '../landing_page/home/Hero';

describe('Hero Component',()=>{
    test('renders hero image',()=>{
        render(
            <MemoryRouter>
              <Hero />
            </MemoryRouter>
          );
        const heroImage=screen.getByAltText("Hero_Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute('src','media/images/homeHero.png');
    });
});

// import Hero from "../path/to/Hero";

// describe("Hero Component", () => {
//   test("renders hero image", () => {
    
//     const heroImage = screen.getByAltText("Hero_Image");
//     expect(heroImage).toBeInTheDocument();
//     expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
//   });
// });
