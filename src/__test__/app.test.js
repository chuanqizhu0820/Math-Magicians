import React from "react";
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';


test('click home to see introduction text', ()=>{
    const app = render(<App />);
    const homeLink = app.getByTestId('home-link');
    const introHeadline = app.getByTestId('intro-headline');
    fireEvent.click(homeLink);
    expect(introHeadline.textContent).toBe('Welcome to the math playground!');
})

test('click calculator to see input with 0 in the calculator', ()=>{
    const originalError = console.error;
    console.error = jest.fn();
    const app = render(<App />);
    const calcLink = app.getByTestId('calc-link');
    fireEvent.click(calcLink);
    const inputBox = app.getByTestId('input');
    expect(inputBox.value).toBe("0");
})


test('click quote to see a quote from John A. Van de Walle', ()=>{
    const app = render(<App />);
    const quoteLink = app.getByTestId('quote-link');
    fireEvent.click(quoteLink);
    const authorName = app.getByTestId('author');
    expect(authorName.textContent).toBe("John A. Van de Walle");
})