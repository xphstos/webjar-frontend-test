import React, { useEffect, useRef } from 'react'
import Logo from "../../assets/logo-up.svg?component"
import styles from "./Header.module.scss"

const Header = () => {
	const headerRef = useRef(null)

	useEffect(() => {
		typeof document === "object" && document.documentElement.setAttribute('style', `--header-height: ${headerRef.current.getBoundingClientRect().height}px`)

	}, [headerRef])

	return (
	<header className={styles.header} ref={headerRef}>
		<Logo />
	</header>
)
}

export default Header
