import React from "react";
import { Dropdown, Menu, Divider } from "semantic-ui-react";


export default function Navbar() {
    return (
       <Menu fixed="top">
            <Dropdown item icon="bars">
                <Dropdown.Menu>
                 <Dropdown.Item
                        text="All articles"
                        onClick={() => {
                            window.location.replace("/articles");
                        }}
                    />
                    {/* <Dropdown.Item
                        text="Add articles"
                        onClick={() => {
                            window.location.replace("/add-article");
                        }}
                    /> */}
                   <Divider />
                    <Dropdown.Item
                        text="Microbiology"
                        onClick={() => {
                            window.location.replace("/categories/1");}}
                    />
                    <Dropdown.Item
                        text="Chemistry"
                        onClick={() => {
                            window.location.replace("/categories/2");}}
                    />
                    <Dropdown.Item
                      text="Biology"
                      onClick={() => {
                            window.location.replace("/categories/3");}}
                    />
                </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>
                <h1>
                    <a
                        href="https://agitated-murdock-bb9582.netlify.app"
                    >
                        Pintereach
                    </a>
                </h1>
            </Menu.Item>
            <Menu.item>

            </Menu.item>
            <Menu.Item
                position="right"
                onClick={() => {
                    //console.log("delete");

                 localStorage.removeItem("token");
                    localStorage.removeItem("user");
                    window.location.reload(true);
                }}
            >
                Logout
            </Menu.Item>
        </Menu>
    );
}