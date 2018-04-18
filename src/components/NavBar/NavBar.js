import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    render() {
        return (
            <div>
                <Navbar color="success" light>
                    <NavbarBrand href="/" className="mr-auto">Home</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="/alunos">Alunos</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/mestres">Mestres</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/ecretaria">Secretaria</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/financeiro">Financeiro</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/programas-escolares">Programas Escolar</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/grade-horaria">Grade Horaria</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
