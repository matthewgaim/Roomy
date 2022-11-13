import { render, fireEvent, screen } from "@testing-library/react";
import Sidebar from "../components/Sidebar";
import * as React from 'react';
import Store from "../store";
import { Provider } from "react-redux";
import '@testing-library/jest-dom';
import { signInWithEmail } from "../action";

test("Sidebar profile button takes you to /feed when not signed in", () => {    
    render(
        <Provider store={Store}>
            <Sidebar />
        </Provider>
    );
    const profileButton = screen.getByTestId("profile");

    expect(profileButton).toHaveAttribute("href", "/feed");
});