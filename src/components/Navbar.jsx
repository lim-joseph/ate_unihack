import React from "react";
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Link,
	Button,
} from "@nextui-org/react";
import "../index.css";

export default function App({ setShowCalendar }) {
	return (
		<Navbar className="border-b-1 drop-shadow-sm bg-white hover:cursor-pointer">
			<NavbarBrand>
				<a
					className="font-bold text-inherit"
					onClick={() => {
						setShowCalendar(false);
					}}
				>
					ALLOCATE+ PLUS
				</a>
			</NavbarBrand>
			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				<NavbarItem>
					<Link color="foreground" href="/about">
						About
					</Link>
				</NavbarItem>
				<NavbarItem isActive>
					<Link href="#" aria-current="page">
						Main
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color="foreground" href="#">
						Repository
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem className="hidden lg:flex">
					<Link href="#" color="danger">
						Login
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Button as={Link} color="danger" href="#" variant="flat">
						Sign Up
					</Button>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
}
