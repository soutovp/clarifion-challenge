'use client'
import { useEffect, useRef, useState } from 'react'
import _Header from './header.module.sass'
export function Header() {
	const refCount = useRef(1)
	const elRef = useRef(null)
	const [count, setCount] = useState(refCount.current)
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)
	let validated = false
	// Configuration --------------
	const slideTimerInSeconds = 5
	const info = {
		satisfactionDays: 30, // Satisfaction Days
		freeDelivery: 40,	// Free $ from Delivery
		happyCustomers: 50000, // Amount of Happy Customers
	}
	//-----------------------------

	const changeSlide = (direction: 'foward' | 'backward' = 'foward', value: number): void => {
		if (direction === 'foward') {
			if (value === 4) {
				refCount.current = 1
				setCount(1)
			} else {
				refCount.current = refCount.current + 1
				setCount(refCount.current)
			}
			return
		} else if (direction === 'backward') {
			if (value === 1) {
				refCount.current = 4
				setCount(refCount.current)
			} else {
				refCount.current = refCount.current - 1
				setCount(refCount.current)
			}
			return
		}
	}
	useEffect(() => {
		setCount(count => count = refCount.current)
		window.addEventListener('resize', () => {
			setWindowWidth(window.innerWidth)
		})
		setInterval(() => {
			if (validated) {
				changeSlide('foward', refCount.current)
			} else {
				null
			}
			validated = !validated
		}, 1000 * slideTimerInSeconds)
	}, [])
	return (
		<header className={_Header.header}>
			<div onClick={() => changeSlide('backward', refCount.current)}><img src='/svg/left-arrow.svg' /></div>
			<ul>
				<li ref={elRef} style={windowWidth <= 768 ? { display: (count === 1 ? 'flex' : 'none') } : {}}><img src="/svg/check-icon.svg" alt="Check symbol" />{info.satisfactionDays}-day satisfaction guarantee</li>
				<li ref={elRef} style={windowWidth <= 768 ? { display: (count === 2 ? 'flex' : 'none') } : {}}><img src="/svg/truck-icon.svg" alt="Truck symbol" />Free delivery on orders over {info.freeDelivery.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })}</li>
				<li ref={elRef} style={windowWidth <= 768 ? { display: (count === 3 ? 'flex' : 'none') } : {}}><img src="/svg/heart-icon.svg" alt="Heart symbol" />{info.happyCustomers.toLocaleString()}+ happy customers</li>
				<li ref={elRef} style={windowWidth <= 768 ? { display: (count === 4 ? 'flex' : 'none') } : {}}><img src="/svg/arrow-sync-checkmark.svg" alt="Sync symbol" />100% money back guarantee</li>
			</ul>
			<div onClick={() => changeSlide('foward', refCount.current)}><img src='/svg/right-arrow.svg' /></div>
		</header>
	)
}